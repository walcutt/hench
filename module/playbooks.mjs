export const nullPlaybookKey = "NONE";

export const playbookKeys = [
    nullPlaybookKey,
    "SUPERFAN",
    "BADASS",
    "LABMAN",
    "DEMOTED",
    "OUTCAST",
    "USURPER",
    "TIMECARD",
];

const playbooks = {
    NONE: null,
    SUPERFAN: {
        detailQuestions: {
            one: "What's the coolest thing you've ever done?",
            two: "What's your favorite story about the boss? ",
        },
        inclinations: {
            one: "Drawing on your knowledge of comic lore",
            two: "Acting with naive optimism",
        },
        missionPlanningQuestions: {
            one: "You've read an issue about the target. Choose a power or a weakness of the target, and explain it.",
            two: "Confidently state a poorly thought out plan to achieve the goal.",
            three: "Ask the boss: is the target really as cool as it's made out to be?",
        },
        expTrigger: "You faced the grim realities of the job.",
    },
    BADASS: {
        detailQuestions: {
            one: "Have you killed on the job? If so, what was your first? ",
            two: "How did the boss earn your respect?",
        },
        inclinations: {
            one: "Applying brute force",
            two: "Making a threat",
        },
        missionPlanningQuestions: {
            one: "You've fought the target before. State where they left a scar, and how they did it.",
            two: "The target is an old friend. State how you met, and how it ended.",
            three: "Ask the boss: can we kill the target?",
        },
        expTrigger: "Your strength couldn't solve the problem at hand.",
    },
    LABMAM: {
        detailQuestions: {
            one: "What was your first invention? ",
            two: "What secret project does the boss fund? Why is it doomed? ",
        },
        inclinations: {
            one: "Using your intellect",
            two: "Doing something unexpected",
        },
        missionPlanningQuestions: {
            one: "Present your new prototype weapon, which the target is probably weak to.",
            two: "State a fact about the target's defense systems.",
            three: "Ask the boss: what secret research is the target hiding?",
        },
        expTrigger: "Your invention failed fantastically.",
    },
    DEMOTED: {
        detailQuestions: {
            one: "What was your old villain name? Why are you just a hench, now?",
            two: "What leverage does the boss have on you?",
        },
        inclinations: {
            one: "Acting with excessive flair",
            two: "Attempting to reclaim your status",
        },
        missionPlanningQuestions: {
            one: "The target's clearly a rookie. State an obvious flaw with their approach or gimmick.",
            two: "You've bested the target before. State how, and why you can't just do that again.",
            three: "Ask the boss: why hasn't the Guild taken out the target?",
        },
        expTrigger: "Your old tricks weren't cut out for the job.",
    },
    OUTCAST: {
        detailQuestions: {
            one: "Why has society rejected you? ",
            two: "Why has the boss taken you in? ",
        },
        inclinations: {
            one: "Attempting to impress someone",
            two: "Acting against all social norms",
        },
        missionPlanningQuestions: {
            one: "The target has treated you cruelly. State when, and how.",
            two: "You and the target have something in common. State what, and how that makes you feel.",
            three: "Ask the boss: Why do you hate the target?",
        },
        expTrigger: "An attempt at connection was rejected.",
    },
    USURPER: {
        detailQuestions: {
            one: "What is your ultimate ambition? ",
            two: "What habit of the boss infuriates you the most? ",
        },
        inclinations: {
            one: "Acting on hidden agendas.",
            two: "Putting yourself before anyone else.",
        },
        missionPlanningQuestions: {
            one: "Describe how the target is uniquely equipped to defeat the boss.",
            two: "Describe how you are uniquely equipped to defeat the target.",
            three: "Ask the boss: are you really prepared for this mission?",
        },
        expTrigger: "You had to act selflessly.",
    },
    TIMECARD: {
        detailQuestions: {
            one: "Who relies on you? ",
            two: "How did the boss convince you to take the job?",
        },
        inclinations: {
            one: "Invoking rules or regulations.",
            two: "Taking the laziest approach.",
        },
        missionPlanningQuestions: {
            one: "State something that, by Guild rule, the target cannot do to you this mission.",
            two: "State something you refuse to do this mission.",
            three: "Ask the boss: How can we get a bonus on this job?",
        },
        expTrigger: "You had to act above and beyond your usual duties.",
    },
};

export function lookupPlaybook(key) {
    return playbooks[key];
}