import { playbookKeys, validatePlaybookKey, getPlaybookMutation } from "../playbooks.mjs";
import { getValueAtPath, copyAndMutateAtPath, deepCopy, updateField } from "../helpers/object-helper.mjs";

export class HenchDebugSheet extends ActorSheet {
    /** @override */
    get template() {
        return `systems/hench/templates/hench-debug.hbs`;
    }

    /** @override */
    getData() {
        const context =  super.getData();

        context.playbookKeys = [...playbookKeys, 'test'].map((k) => ({ key: k, selected: k === this.actor.system.playbook}));

        return context;
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        html.on('change', '.hench-hench-sheet-playbook-dropdown', this._changePlaybook.bind(this));

        html.on('click', '#hench-console-log', (event) => console.log(this.actor));

        // Checkbox logic
        // boolean checkboxes
        html.find('.hench-checkbox-toggle-field').on('change', (event) => {
            const element = event.currentTarget;
            const path = element.dataset.fieldPath;
            const value = element.checked;

            updateField(this.actor, path, value);
        });
    }

    _changePlaybook(newPlaybookKeyEvent) {
        const newPlaybookKey = newPlaybookKeyEvent.target.value;

        if(validatePlaybookKey(newPlaybookKey)) {
            const mutation = getPlaybookMutation(newPlaybookKey, 'system.');

            this.actor.update(mutation);
        }
    }
}