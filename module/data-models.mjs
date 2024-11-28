const { HTMLField, SchemaField, NumberField, StringField, BooleanField, FilePathField, ArrayField } = foundry.data.fields;

import { nullPlaybookKey, playbookKeys, lookupPlaybook } from './playbooks.mjs';

const textField = () => new StringField({ required: true, blank: true });

const promptField = () => new SchemaField({
    question: textField(),
    answer: textField()
});

const harmField = () => new SchemaField({
    marked: new BooleanField({ required: true }),
    description: textField(),
});

export class HenchDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            name: textField(),
            look: textField(),
            detailAnswers: new SchemaField({
                one: textField(),
                two: textField(),
            }),
            customInclination: textField(),
            harm: new SchemaField({
                levelOne: new SchemaField({
                    one: harmField(),
                    two: harmField(),
                }),
                levelTwo: new SchemaField({
                    one: harmField(),
                    two: harmField(),
                }),
                levelThree: new SchemaField({
                    one: harmField(),
                }),
                levelFour: new SchemaField({
                    one: harmField(),
                }),
            }),
            stress: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 12 }),
            experience: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 5 }),

            playbook: new StringField({ required: true, blank: false, initial: nullPlaybookKey, options: playbookKeys }),
        };
    }

    static migrateData(source) {
        // No migrations yet - base case.

        return super.migrateData(source);
    }

    get dead() {
        return !!this.harm.levelFour.marked;
    }

    get playbookDetails() {
        return lookupPlaybook(this.playbook);
    }

    // TODO IMPLEMENT advancements
    get gearLimit() {
        return 3;
    }

    get hasPlaybookSelected() {
        return this.playbook !== nullPlaybookKey;
    }

    get detailQuestions() {
        return this.playbookDetails?.detailQuestions;
    }

    get inclinations() {
        const base = this.playbookDetails?.inclinations ?? {};

        return {
            ...base,
            custom: this.customInclination
        };
    }

    get missionPlanningQuestions() {
        return this.playbookDetails?.missionPlanningQuestions;
    }

    get expTriggers() {
        const fromPlaybook = this.playbookDetails?.expTrigger;

        let triggers = {
            one: "You acted on your inclinations.",
            two: "You made the boss proud.",
            three: "Your home life interfered with the mission."
        };

        if(fromPlaybook) {
            triggers.four = fromPlaybook;
        }

        return triggers;
    }
}