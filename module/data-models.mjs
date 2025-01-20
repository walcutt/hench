const { HTMLField, SchemaField, NumberField, StringField, BooleanField, FilePathField, ArrayField } = foundry.data.fields;

import { getBossMutation, nullStorylineKey, storylineKeys } from './boss.mjs';
import { nullPlaybookKey, playbookKeys, lookupPlaybook, getPlaybookMutation } from './playbooks.mjs';
import { CURRENT_VERSION, versions } from './constants/versions.mjs';

const textField = () => new StringField({ required: true, blank: true });

const promptField = () => new SchemaField({
    question: textField(),
    answer: textField()
});

const markableField = () => new SchemaField({
    marked: new BooleanField({ required: true, initial: false }),
    description: textField(),
});

const arrayFieldValidator = (maxSize) => {
    return (val, opts) => {
        return !(val?.length > maxSize);
    };
};

const cappedArrayField = (innerField, maxSize, defaultValue = undefined) => new ArrayField(innerField, {
    required: true,
    nullable: false,
    initial: defaultValue ? Array(maxSize).fill(defaultValue) : [],
    validate: arrayFieldValidator(maxSize),
});

const moveField = () => new SchemaField({
    marked: new BooleanField({ required: true, initial: false }),
    name: textField(),
    description: textField(),
    hasWriteIn: new BooleanField({ required: true, initial: false }),
    writein: textField(),
});

const nullPlaybook = lookupPlaybook(nullPlaybookKey);

export class HenchDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            version: new StringField({ required: true, blank: true, initial: CURRENT_VERSION, options: versions }),
            look: textField(),
            details: cappedArrayField(promptField(), 2),
            fixedInclinations: cappedArrayField(textField(), 2),
            customInclination: textField(),
            missionPlanning: cappedArrayField(textField(), 3),

            gearLimit: new NumberField({ required: true, integer: true, min: 3, initial: 3, max: 5 }),
            fixedGear: cappedArrayField(markableField(), 9),
            customGear: markableField(),
            harm: new SchemaField({
                levelOne: cappedArrayField(markableField(), 2, { marked: false, description: "" }),
                levelTwo: cappedArrayField(markableField(), 2, { marked: false, description: "" }),
                levelThree: cappedArrayField(markableField(), 1, { marked: false, description: "" }),
                levelFour: cappedArrayField(markableField(), 1, { marked: false, description: "" }),
            }),
            stress: new NumberField({ required: true, integer: true, min: 0, initial: 3, max: 8 }),

            moves: cappedArrayField(moveField(), 5),
            customMove: moveField(),

            experienceTriggers: cappedArrayField(markableField(), 5),
            experience: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 5 }),

            baseAdvancements: cappedArrayField(markableField(), 5),
            exAdvancements: cappedArrayField(markableField(), 3),

            playbook: new StringField({ required: true, blank: false, initial: nullPlaybookKey, options: playbookKeys }),
        };
    }

    static migrateData(source) {
        // Draft 0 -> Draft 1
        if(!source.version || source.version === versions.DRAFT_0) {
            source = this.migrateFromDraft0(source);
        }

        return super.migrateData(source);
    }

    static migrateFromDraft0(source) {
        // Update stress cap.
        if(source.stress > 8) {
            source.stress = 8;
        }

        // Add exp trigger.
        source.experienceTriggers.splice(2, 0, {
            marked: false,
            description: "You got on the boss's nerves.",
        });

        // Update playbooks details
        var playbook = lookupPlaybook(source.playbook);
        switch(source.playbook) {
            case "SUPERFAN":
                // Change first detail. Wipe response.
                source.details[0] = playbook.details[0];

                // Update forum lurker move description
                source.moves[4].description = playbook.moves[4].description;
                break;
            case "BADASS":
                // Change first detail. Wipe response
                source.details[0] = playbook.details[0];

                // Change 3rd mission planning question
                source.missionPlanning[2] = playbook.missionPlanningQuestions[2];

                // Update prep ability
                source.moves[4].description = playbook.moves[4].description;
                break;
            case "LABMAN":
                // Rename playbook
                source.playbook = "INVENTOR";
                // Grab based on new name
                playbook = lookupPlaybook(source.playbook);

                // Change first gear item
                source.fixedGear[5].description = playbook.gear[0].description;

                // Update prep ability
                source.moves[4].description = playbook.moves[4].description;
            default:
                break;
        }

        source.version = versions.DRAFT_1;

        return source;
    }

    /** @override */
    async _preCreate(data, options, user) {
        await super._preCreate(data, options, user);

        const addPlaybookInfoMutation = getPlaybookMutation(data.playbook);

        return this.updateSource(addPlaybookInfoMutation);
    }

    get dead() {
        return !!this.harm.levelFour.marked;
    }

    get hasPlaybookSelected() {
        return this.playbook !== nullPlaybookKey;
    }

    get inclinations() {
        const base = this.fixedInclinations ?? [];

        return [
            ...base,
            this.customInclination
        ];
    }

    get gear() {
        const base = this.fixedGear ?? [];

        return [
            ...base,
            this.customGear,
        ];
    }
}

export class BossDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            version: new StringField({ required: true, blank: true, initial: CURRENT_VERSION, options: versions }),
            look: textField(),
            details: cappedArrayField(promptField(), 4),
            storyline: new StringField({ required: true, blank: false, initial: nullStorylineKey, options: storylineKeys}),

            heat: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 18}),

            experienceTriggers: cappedArrayField(markableField(), 4),
            experience: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 5 }),

            moves: cappedArrayField(moveField(), 13),
        };
    }

    static migrateData(source) {
        if(!source.version || source.version === versions.DRAFT_0) {
            // Changes
            
            source.version = versions.DRAFT_1;
        }

        return super.migrateData(source);
    }

    /** @override */
    async _preCreate(data, options, user) {
        await super._preCreate(data, options, user);

        const initMutation = getBossMutation();

        return this.updateSource(initMutation);
    }

    get tier() {
        const divisor = 18 / 3;

        return Math.ceil(this.heat / divisor);
    }
}