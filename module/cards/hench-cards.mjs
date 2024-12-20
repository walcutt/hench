import { CARD_ZONES } from "./hench-card.mjs";

const { StringField } = foundry.data.fields;

// Data Model
export class HenchCardsDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {};
    }
}

// Document Class
export class HenchCards extends Cards {
    // Getters
    get allCards() {
        return this.cards.contents;
    }

    get deck() {
        return this.cardsInZone(CARD_ZONES.DECK);
    }

    get discard() {
        return this.allCards.filter(
            c => c.system.zone === CARD_ZONES.DISCARD
        );
    }

    get spread() {
        return this.allCards.filter(
            c => c.system.zone === CARD_ZONES.SPREAD
        );
    }

    get held() {
        return this.allCards.filter(
            c => c.system.zone === CARD_ZONES.HELD
        );
    }

    cardsInZone(zone) {
        return this.allCards.filter(
            c => c.system.zone === zone
        ).sort((a, b) => a.sort - b.sort);
    }

    // Mutations

    async updateCards(mutation) {
        await this.update({
            cards: mutation,
        });
    }

    // After moving cards, re-assign sorting to minimal required values
    async realignSorting() {
        await this.realignSubstackSorting(CARD_ZONES.DECK);
        await this.realignSubstackSorting(CARD_ZONES.SPREAD);
        await this.realignSubstackSorting(CARD_ZONES.HELD);
        await this.realignSubstackSorting(CARD_ZONES.DISCARD);
    }

    async realignSubstackSorting(zone) {
        const cards = this.cardsInZone(zone);

        const sortedCards = cards.sort((a, b) => a.sort - b.sort);

        const mutation = sortedCards.map(
            (c, i) => ({
                _id: c._id,
                sort: i
            })
        );

        await this.updateCards(mutation);
    }

    // Randomize sorting of cards, only in deck.
    async shuffleDeck() {
        const cards = this.cardsInZone(CARD_ZONES.DECK);

        const shuffleMutation = cards.map(
            c => ({
                _id: c._id,
                sort: Math.floor(Math.random() * cards.length)
            })
        );

        await this.updateCards(shuffleMutation);

        await this.realignSorting();
    }

    // Send all cards back to the deck, and shuffle.
    async resetDeck() {
        await this.sendCards(this.discard, CARD_ZONES.DECK);
        await this.sendCards(this.held, CARD_ZONES.DECK);
        await this.sendCards(this.spread, CARD_ZONES.DECK);

        await this.shuffleDeck();
    }

    async sendCards(cards, zone, dest = CONST.CARD_DRAW_MODES.BOTTOM) {
        const existingZone = this.cardsInZone(zone);

        const mutation = cards.map(
            (c, i) => {
                let destIndex;

                switch(dest) {
                    case CONST.CARD_DRAW_MODES.BOTTOM:
                    case CONST.CARD_DRAW_MODES.LAST:
                        destIndex = existingZone.length + i;
                        break;
                    case CONST.CARD_DRAW_MODES.TOP:
                    case CONST.CARD_DRAW_MODES.FIRST:
                        destIndex = (-1 * cards.length) + i;
                        break;
                    default: // Random
                        destIndex = Math.floor(Math.random() * existingZone.length);
                }

                return {
                    _id: c._id,
                    ['system.zone']: zone,
                    sort: destIndex
                };
            }
        );

        await this.updateCards(mutation);

        await this.realignSorting();
    }
}