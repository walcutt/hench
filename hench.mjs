import { HenchDataModel } from "./module/data-models.mjs";

import { HenchDebugSheet } from "./module/sheets/hench-debug.mjs";

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
    Actors.registerSheet('henchDebug', HenchDebugSheet, {
        makeDefault: true,
        label: 'Hench Debug Sheet',
    });
});