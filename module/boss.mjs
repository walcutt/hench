export const nullStorylineKey = "FREEFORM";

export const storylineKeys = [
    nullStorylineKey,
    "BOOTSTRAPPER",
    "VENGEANCE",
    "DOWNWARD SPIRAL",
    "DOMINION",
    "CLEANUP CREW"
];

export function getBossMutation() {
    return bossData;
}

const bossData = {
    details: [
        {
            question: "What fuels your quest for villainy?",
            answer: "",
        },
        {
            question: "How do you dress your henches?",
            answer: "",
        },
        {
            question: "How is your lair designed? ",
            answer: "",
        },
        {
            question: "Where do you draw the line to what you will do? ",
            answer: "",
        },
    ],
    moves: [
        {
            marked: true,
            name: "Force of Will",
            description: `Whenever you act, do not draw. Simply declare what you do, and what happens after.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Extra Armorment",
            description: `Write in an additional gear type on each of your henches' sheets. They can take it on any future mission.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Rotating Armorment I",
            description: `Erase the write-in gear from any number of your henches' sheets, and write in a new equipment.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Rotating Armorment II",
            description: `Erase the write-in gear from any number of your henches' sheets, and write in a new equipment.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Rotating Armorment III",
            description: `Erase the write-in gear from any number of your henches' sheets, and write in a new equipment.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Specialized Training",
            description: `Write a new inclination below. It applies for all of your henches.`,
            hasWriteIn: true,
            writeIn: "",
        },
        {
            marked: false,
            name: "General Training",
            description: `When you take this ability, fill the experience track of each of your henches immediately.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Exceptional Planning",
            description: `At the start of each mission, remove one card from the deck. Any time one of your henches draws, you may replace the card they play with the removed card.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Limelight Lovers",
            description: `If your heat is in Tier III, your henches can take 1 stress to take +1 card to any draw <em>(possibly drawing 4)</em>.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Plot Armor",
            description: `Once per mission, one of your henches can ignore any single instance of harm they would take.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Play it Off",
            description: `Your henches can resist consequences by taking 1 harm "Laughing Stock", instead of marking stress. They can do this even if all of their stress is marked.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Guild Bigwig",
            description: `During fallout, you may draw a second time and use that card instead. Explain who intervenes on your behalf, and how.`,
            hasWriteIn: false,
            writeIn: null,
        },
        {
            marked: false,
            name: "Exit Plan",
            description: `When you take this move, pick a hench to pass the mantle on to. You retire to peace, and they take your place. Is there any ceremony to the transfer? Who knows, and who doesn't?`,
            hasWriteIn: false,
            writeIn: null,
        },
    ],
    experienceTriggers: [
        {
            marked: false,
            description: "Your henches followed even your most superfluous orders.",
        },
        {
            marked: false,
            description: "You achieved your evil ambitions.",
        },
        {
            marked: false,
            description: "News of your deeds spreads far and wide.",
        },
    ]
};