import { HenchDataModel } from "./module/data-models.mjs";

import { HenchActorSheet } from "./module/sheets/hench-actor-sheet.mjs";

Handlebars.registerHelper('int2checkbox', (size, threshold, options) => {
    return Array(size).fill(0).map(
        (e, i) => options.fn({index: i + 1, marked: i < threshold})
    ).reduce((prev, next) => (prev + next), "");
});

Handlebars.registerHelper('partialList', (list, start, end, options) => {
    return list.slice(start, end).map(
        (e, i) => options.fn({ item: e, index: (start + i)})
    ).reduce((prev, next) => (prev + next), "");
});

Hooks.once("init", () => {
    CONFIG.Actor.dataModels = {
        hench: HenchDataModel,
    };

    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('hench', HenchActorSheet, {
        makeDefault: true,
        label: 'Hench Sheet',
    });
});