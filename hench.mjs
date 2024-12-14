import { BossDataModel, HenchDataModel } from "./module/data-models.mjs";

import { HenchActorSheet } from "./module/sheets/hench-actor-sheet.mjs";

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

Hooks.once("init", () => {
    CONFIG.Actor.dataModels = {
        hench: HenchDataModel,
        boss: BossDataModel,
    };

    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('hench', HenchActorSheet, {
        makeDefault: true,
        label: 'Hench Sheet',
    });
});