import { CARD_ZONES } from "../cards/hench-card.mjs";
import { updateField } from "../helpers/mutation-helper.mjs";

export class HenchDiscardView extends CardsConfig {
    /** @override */
    get template() {
        return `systems/hench/templates/cards/view.hbs`;
    }

    /** @override */
    getData() {
        return super.getData();
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
    }

    /** @override */
    static get defaultOptions() {
        let opts = super.defaultOptions;

        return opts;
    }
}