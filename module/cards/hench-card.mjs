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
            cue: new StringField({required: true, blank: true, initial: ""}),
            zone: new StringField({required: true, blank: false, initial: CARD_ZONES.DECK, options: CARD_ZONES}),
        };
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