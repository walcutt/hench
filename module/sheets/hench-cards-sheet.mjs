export class HenchCardsSheet extends CardsConfig {
    /** @override */
    get template() {
        return `systems/hench/templates/cards/cards.hbs`;
    }

    /** @override */
    getData() {
        const t = super.getData();
        console.log(t);
        return t;
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
    }

    /** @override */
    static get defaultOptions() {
        let opts = super.defaultOptions;

        opts.resizable = true;

        return opts;
    }
}