import { HenchCard, HenchCardDataModel } from "./module/cards/hench-card.mjs";
import { HenchCards, HenchCardsDataModel } from "./module/cards/hench-cards.mjs";
import { BossDataModel, HenchDataModel } from "./module/data-models.mjs";

import { HenchActorSheet } from "./module/sheets/hench-actor-sheet.mjs";
import { HenchCardsSheet } from "./module/sheets/hench-cards-sheet.mjs";

Handlebars.registerHelper('int2checkbox', (size, threshold, options) => {
    return Array(size).fill(0).map(
        (e, i) => options.fn({index: i + 1, marked: i < threshold})
    ).reduce((prev, next) => (prev + next), "");
});

Handlebars.registerHelper('partialint2checkbox', (size, threshold, start, end, options) => {
    const indexBase = start + 1;
    const arrSize = Math.max(end - start, 0);

    return Array(arrSize).fill(0).map(
        (e, i) => options.fn({ index: i + indexBase, marked: (i + start) < threshold })
    ).reduce((prev, next) => (prev + next), "");
});

Handlebars.registerHelper('partialList', (list, start, end, options) => {
    return list.slice(start, end).map(
        (e, i) => options.fn({ item: e, index: (start + i)})
    ).reduce((prev, next) => (prev + next), "");
});

Handlebars.registerHelper('canDecrease', (value, cap) => {
    return value > cap;
});

Handlebars.registerHelper('canIncrease', (value, cap) => {
    return value < cap;
});

Handlebars.registerHelper('increment', (value) => (value + 1));
Handlebars.registerHelper('decrement', (value) => (value - 1));

Handlebars.registerHelper('topCard', (cards, zone, options) => {
    const pile = cards.cardsInZone(zone);

    const topCardImage = pile[0]?.currentFace?.img;
    const defaultImage = cards.img;

    const hasTopCard = pile.length > 0;

    return options.fn({ hasTopCard: hasTopCard, topCardImage: topCardImage, deckImage: defaultImage });
});

Hooks.once("init", () => {
    CONFIG.Actor.dataModels = {
        hench: HenchDataModel,
        boss: BossDataModel,
    };

    CONFIG.Card.dataModels = {
        base: HenchCardDataModel,
    };
    CONFIG.Card.documentClass = HenchCard;

    CONFIG.Cards.dataModels = {
        base: HenchCardsDataModel,
    };
    CONFIG.Cards.documentClass = HenchCards;

    // ABSOLUTE FUCKING CLUDGE:
    // For some reason, the Card embedded doc in Cards is filed under "cards" and not "Card",
    // And/or the lookup to create embedded documents is fucked beyond belief.
    CONFIG.cards = {
        documentClass: HenchCard,
    };

    console.log(CONFIG);

    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('hench', HenchActorSheet, {
        makeDefault: true,
        label: 'Hench Sheet',
    });

    CardStacks.unregisterSheet('core', CardsConfig);
    CardStacks.registerSheet('hench', HenchCardsSheet, {
        makeDefault: true,
        label: 'Hench Cards Sheet'
    });
});