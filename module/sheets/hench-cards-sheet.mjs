export class HenchCardsSheet extends CardsConfig {
    /** @override */
    get template() {
        return `systems/hench/templates/cards/cards.hbs`;
    }

    /** @override */
    getData() {
        return super.getData();
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
    }
}