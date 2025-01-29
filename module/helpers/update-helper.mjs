export const versions = {
    UNDEFINED: '',
    DRAFT_0: '0',
    DRAFT_1: '1',
};

export const CURRENT_VERSION = versions.DRAFT_1;

const updateMap = {
    [versions.UNDEFINED]: versions.DRAFT_0,
    [versions.DRAFT_0]: versions.DRAFT_1,
};

const updateWarnings = {
    [versions.DRAFT_1]: {
        title: `Draft 1 Update!`,
        content: `The module is now compatible with Draft 1. Due to these changes, we recommend:
            <ul>
                <li> You create new character sheets for Henches and Bosses, and delete the old ones. </li>
                <li> You delete and recreate your deck, or update the Ace of Diamonds and add a joker. </li>
            </ul>`,
    },
};

function getWarningsSinceVersion(oldVersion) {
    
    const next_v = updateMap[oldVersion];

    if(next_v) {
        const next_w = updateWarnings[next_v];

        if(next_w) {
            return [...getWarningsSinceVersion(next_v), next_w];
        } else {
            return getWarningsSinceVersion(next_v);
        }
    } else {
        return [];
    }
}

export function showUpdateWarningDialogue(oldVersion) {
    const warnings = getWarningsSinceVersion(oldVersion);

    if(warnings?.length > 0) {
        const header = ``;

        const content = warnings.reduce((prev, next) => {
            return prev + `
                <div>
                    <h2>${next.title}</h2>
                    <p>${next.content}</p>
                </div>`;
        }, header);

        const dialogue = new Dialog({
            title: 'Update Notice',
            content: content,
            buttons: {
                one: {
                    label: 'OK',
                    callback: () => null,
                }
            },
            default: "one",
        });

        dialogue.render(true);

        return dialogue;
    }
}