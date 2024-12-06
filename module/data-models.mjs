const { HTMLField, SchemaField, NumberField, StringField, BooleanField, FilePathField, ArrayField } = foundry.data.fields;

import { nullPlaybookKey, playbookKeys, lookupPlaybook, getPlaybookMutation } from './playbooks.mjs';

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
            stress: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 12 }),

            moves: cappedArrayField(moveField(), 5),
            customMove: moveField(),

            experienceTriggers: cappedArrayField(markableField(), 4),
            experience: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 5 }),

            baseAdvancements: cappedArrayField(markableField(), 5),
            exAdvancements: cappedArrayField(markableField(), 3),

            playbook: new StringField({ required: true, blank: false, initial: nullPlaybookKey, options: playbookKeys }),
        };
    }

    static migrateData(source) {
        // No migrations yet - base case.

        return super.migrateData(source);
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