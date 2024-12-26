import { CARD_ZONES } from "../cards/hench-card.mjs";

export class HenchCardsSheet extends CardsConfig {
    /** @override */
    get template() {
        return `systems/hench/templates/cards/cards.hbs`;
    }

    /** @override */
    getData() {
        const t = super.getData();
        return t;
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        html.find('.hench-cards-action-draw').on('click', (event) => {
            if(this.document.spread.length < 5) {
                this.document.drawSpread(1);
            }
        });

        html.find('.hench-cards-action-play').on('click', async (event) => {
            const element = event.currentTarget;
            const index = element.dataset.cardIndex;

            // play the card!
            await this.document.sendCards(this.document.spread.slice(index, index + 1), CARD_ZONES.DISCARD, CONST.CARD_DRAW_MODES.TOP);
            await this.document.sendCards(this.document.spread, CARD_ZONES.DECK, CONST.CARD_DRAW_MODES.BOTTOM);
        });

        html.find('.hench-cards-action-draw-bottom').on('click', (event) => {
            if(this.document.spread.length < 5) {
                this.document.drawSpread(1, CONST.CARD_DRAW_MODES.BOTTOM);
            }
        });

        html.find('.hench-cards-action-reset').on('click', (event) => {
            this.document.resetDeck();
        });

        html.find('.hench-cards-action-return-spread').on('click', (event) => {
            this.document.sendCards(this.document.spread, CARD_ZONES.DECK, CONST.CARD_DRAW_MODES.BOTTOM);
        });
    }

    /** @override */
    static get defaultOptions() {
        let opts = super.defaultOptions;

        opts.resizable = true;

        return opts;
    }
}