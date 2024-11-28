import { HenchDataModel } from "./module/data-models.mjs";

import { HenchDebugSheet } from "./module/sheets/hench-debug.mjs";

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