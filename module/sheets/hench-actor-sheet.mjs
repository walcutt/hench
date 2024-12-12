import { playbookKeys, validatePlaybookKey, getPlaybookMutation } from "../playbooks.mjs";
import { updateField } from "../helpers/mutation-helper.mjs";

export class HenchActorSheet extends ActorSheet {
    /** @override */
    get template() {
        console.log(`Mapping sheet: ${this.actor.type} => systems/hench/templates/actors/${this.actor.type}.hbs`)
        return `systems/hench/templates/actors/${this.actor.type}.hbs`;
    }

    /** @override */
    getData() {
        const context =  super.getData();

        context.playbookKeys = [...playbookKeys, 'test'].map((k) => ({ key: k, selected: k === this.actor.system.playbook}));

        // TODO define system constants for these
        context.maxStress = 12;
        context.maxExp = 5;

        context.minGear = 3;
        context.maxGear = 5;

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

        // int checkboxes
        html.find('.hench-checkbox-int-field').on('change', (event) => {
            const element = event.currentTarget;
            const path = element.dataset.fieldPath;
            const checked = element.checked;
            const valueData = parseInt(element.dataset.value);

            const value = checked ? valueData : valueData - 1;

            updateField(this.actor, path, value);
        });

        // text fields
        html.find('.hench-text-input').on('change', async (event) => {
            const element = event.currentTarget;
            const path = element.dataset.fieldPath;
            const value = element.value;

            await updateField(this.actor, path, value);
        });

        // harm auto-marking
        html.find('.hench-harm-field').on('change', async (event) => {
            const element = event.currentTarget;
            const primaryPath = element.dataset.fieldPath;
            const secondaryPath = element.dataset.dependentPath;
            const stringValue = element.value;

            const markedValue = stringValue !== null && stringValue !== undefined && stringValue !== "";

            await updateField(this.actor, primaryPath, stringValue)
            await updateField(this.actor, secondaryPath, markedValue);
        });

        // increase/decrease buttons
        html.find('.hench-increment-button-field').click((event) => {
            const element = event.currentTarget;
            const path = element.dataset.fieldPath;
            const value = element.dataset.value;

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