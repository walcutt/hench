import { CURRENT_VERSION, versions } from '../constants/versions.mjs';

const { HTMLField, SchemaField, NumberField, StringField, BooleanField, FilePathField, ArrayField } = foundry.data.fields;

export const CARD_ZONES = {
    DECK: 'DECK',
    DISCARD: 'DISCARD',
    SPREAD: 'SPREAD',
    HELD: 'HELD',
};

// Data Model
export class HenchCardDataModel  extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            version: new StringField({ required: true, blank: true, initial: CURRENT_VERSION, options: versions }),
            cue: new StringField({required: true, blank: true, initial: ""}),
            zone: new StringField({required: true, blank: false, initial: CARD_ZONES.DECK, options: CARD_ZONES}),
        };
    }

    static migrateData(source) {
        // Draft 0 -> Draft 1
        if(!source.version || source.version === versions.DRAFT_0) {
            // Changes

            source.version = versions.DRAFT_1;
        }

        return super.migrateData(source);
    }
}

// Document Class
export class HenchCard extends Card {
    get numericalValue() {
        if(this.value < 7) {
            return this.value;
        }

        return 0;
    }
}