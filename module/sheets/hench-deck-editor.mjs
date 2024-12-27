import { CARD_ZONES } from "../cards/hench-card.mjs";
import { updateField } from "../helpers/mutation-helper.mjs";

export class HenchDeckEditor extends CardsConfig {
    /** @override */
    get template() {
        return `systems/hench/templates/cards/deck.hbs`;
    }

    /** @override */
    getData() {
        return super.getData();
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        html.find('.hench-text-input').on('change', async (event) => {
            const element = event.currentTarget;
            const path = element.dataset.fieldPath;
            const value = element.value;

            await updateField(this.document, path, value);
        });

        html.find('.hench-reset-deck').on('click', (event) => {
            this.document.resetDeck();
        });

        html.find('.hench-add-card').on('click', (event) => {
            this.document.createEmbeddedDocuments("cards", [
                {
                    name: 'New Card',
                    faces: [
                        {
                            name: 'New Card',
                            img: '',
                        }
                    ],
                    face: 0,
                    height: 3,
                    sort: 0,
                    system: {
                        cue: "Default cue"
                    }
                }
            ]);
        });

        html.find('.hench-card-img-input').on('click', async (event) => {
            const element = event.currentTarget;
            const id = element.dataset.cardId;

            const card = this.document.cards.get(id);
            let face = card.currentFace;

            const filePicker = new FilePicker();
            filePicker.callback = (file) => {
                face.img = file;
                
                const mutation = [
                    {
                        _id: id,
                        faces: [
                            face
                        ],
                    }
                ];

                this.document.updateCards(mutation);
            };

            const fullPath = filePicker._inferCurrentDirectory(face.img);

            filePicker.activeSource = fullPath[0];

            await filePicker.browse(face.img);

            await filePicker.render();
        });

        html.find('.hench-card-name-input').on('change', async (event) => {
            const element = event.currentTarget;
            const id = element.dataset.cardId;

            const value = element.value;
            const subPath = element.dataset.field;

            const card = this.document.cards.get(id);
            let face = card.currentFace;
            face.name = value;

            const mutation = [
                {
                    _id: id,
                    faces: [face],
                }
            ];

            await this.document.updateCards(mutation);
        });

        html.find('.hench-card-text-input').on('change', async (event) => {
            const element = event.currentTarget;
            const id = element.dataset.cardId;

            const value = element.value;
            const subPath = element.dataset.field;

            const mutation = [
                {
                    _id: id,
                    [subPath]: value,
                }
            ];

            await this.document.updateCards(mutation);
        });

        html.find('.hench-card-hold-button').on('click', (event) => {
            const element = event.currentTarget;
            const id = element.dataset.cardId;

            const card = this.document.cards.get(id);

            this.document.sendCards([card], CARD_ZONES.HELD);
        });

        html.find('.hench-card-delete-button').on('click', async (event) => {
            const element = event.currentTarget;
            const id = element.dataset.cardId;

            await this.document.deleteEmbeddedDocuments("cards", [id]);
            await this.document.realignSorting();
        });
    }

    /** @override */
    static get defaultOptions() {
        let opts = super.defaultOptions;

        return opts;
    }
}