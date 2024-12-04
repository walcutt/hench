import { HenchDataModel } from "./module/data-models.mjs";

import { HenchActorSheet } from "./module/sheets/hench-actor-sheet.mjs";

Handlebars.registerHelper('int2checkbox', (size, threshold, options) => {
    return new Array(size).fill(0).map(
        (e, i) => options.fn({index: i + 1, marked: i < threshold})
    );
});

Hooks.once("init", () => {
    CONFIG.Actor.dataModels = {
        hench: HenchDataModel,
    };

    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('hench', HenchActorSheet, {
        makeDefault: true,
        label: 'Hench Debug Sheet',
    });
});