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
    [nullPlaybookKey]: {
        details: [
            {
                question: "**** *** ******* ** ******* **?",
                answer: "",
            },
            {
                question: "*** *** *** **** ****** ********** ** *** ** *?",
                answer: "",
            }
        ],
        fixedInclinations: [
            "**** ***** ** *** *********** ** ***** **** *** *.",
            "******* *** *** ** *** ****** *** **.",
        ],
        missionPlanningQuestions: [
            "**** *** ******* ** ******* ** **** ***** ** *** *********** ** ***** **** *** *.",
            "*** *** *** **** ****** ********** ** *** ** * ******* *** *** ** *** ****** *** **.",
            "****** ** ******** ***** *** **** ***** *** * ********* ********* **** ******** **** ***.",
        ],
        expTrigger: {
            marked: false,
            description: "*** * ********* ********* **** ******** **** ***.",
        },
        advancement: {
            marked: false,
            description: "****** ********** ** *** ** * ******* *** *** ** ***. Retire."
        },
        gear: [
            {
                marked: false,
                description: "***** ********* ** ***",
            },
            {
                marked: false,
                description: "***** ***",
            },
            {
                marked: false,
                description: "******* ******",
            },
            {
                marked: false,
                description: "************** ******",
            },
        ],
        moves: [
            {
                marked: false,
                name: "*********** ********",
                description: `**** *** ***** **** * *** ****** ** ********** *********, *** **** *** *** *** *** ** *** *********. ***'** ***** ** **** ******: ******. ******** *** ***** ** ****.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "*********** **************",
                description: `**** *** ***** *** ** ******* ********* ******, **** ** **** ** **** **** **** ****** ******* **.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "*********",
                description: `**** *** *** *** ** ******* ** *** **** ******* *** *** * ******** ***** *** ****** ******** ** *** **** ********.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "***************** *******  ********** **",
                description: `** *** **** ****** ******* *** **** ****** ***** **, *** *** ** *** ***** ******* **** *** ************ ***** *****. ******* *** **** ********.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "*************!",
                description: `** * ******** **** *** *** ***** *** *** *** *********** ***** * ***** ** *** *******. ***** * ****** **** ***** **** ***** *** ****. ****** *** ***, *** *** *** ****:
                <ul class="hench-list-1-col">
                    <li>** * *-*, *** ***** **** *********** ** ******* *** ******.</li>
                    <li>** * *-*, *** ***** **** *********** ** ***** *** ***** * ****** ** *****.</li>
                    <li>** * *-* ******* ***** ****** ** **** ****** *** **** ********* **** **** **** ********** ** *******.</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
        ]
    },
    SUPERFAN: {
        details: [
            {
                question: "What's the coolest thing you've ever done?",
                answer: "",
            },
            {
                question: "What's your favorite story about the boss?",
                answer: "",
            }
        ],
        fixedInclinations: [
            "Drawing on your knowledge of comic lore",
            "Acting with naive optimism",
        ],
        missionPlanningQuestions: [
            "You've read an issue about the target. Choose a power or a weakness of the target, and explain it.",
            "Confidently state a poorly thought out plan to achieve the goal.",
            "Ask the boss: is the target really as cool as it's made out to be?",
        ],
        expTrigger: {
            marked: false,
            description: "You faced the grim realities of the job.",
        },
        advancement: {
            marked: false,
            description: "Sign a comic book deal, become your own star. Retire."
        },
        gear: [
            {
                marked: false,
                description: "Replica Prop",
            },
            {
                marked: false,
                description: "Camera",
            },
            {
                marked: false,
                description: "Lame Getaway Car",
            },
            {
                marked: false,
                description: "Cheap Comic",
            },
        ],
        moves: [
            {
                marked: false,
                name: "Encyclopedic Knowledge",
                description: `When you first meet a new heroic or villainous character, The Boss may ask you one of the following. You've heard of them before: answer. Whatever you state is true.
                <ul class="hench-list-2-col">
                    <li>What is their power?</li>
                    <li>Why are they here?</li>
                    <li>Who do they work with?</li>
                    <li>Any yes or no question.</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Lampshade",
                description: `When you point out an obvious superhero cliche, take +1 card to your next draw acting against it.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Just an Average Citizen",
                description: `When you are out of uniform no one will suspect you are a henchman until you reveal yourself or act with violence.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Please Don't Be Dead, Please Don't Be Dead...",
                description: `If you have killed someone and felt guilty about it, you may at any point declare they are miraculously still alive. Explain how they survived.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Forum Lurker",
                description: `As a prep action you can trawl the web for information about a piece of the setting. State a single fact about this thing and draw. Ignore the cue, and use the rank:
                <ul class="hench-list-1-col">
                    <li>1-2 — You learn your information is correct but flawed.</li>
                    <li>3-6 — You learn your information is false but holds a kernel of truth.</li>
                    <li>5-6 — Someone takes notice of your search and will interfere with your next obligation or mission.</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
        ]
    },
    BADASS: {
        details: [
            {
                question: "Have you killed on the job? If so, what was your first?",
                answer: "",
            },
            {
                question: "What's your favorite story about the boss?",
                answer: "",
            }
        ],
        fixedInclinations: [
            "Applying brute force",
            "Making a threat",
        ],
        missionPlanningQuestions: [
            "You've fought the target before. State where they left a scar, and how they did it.",
            "The target is an old friend. State how you met, and how it ended.",
            "Ask the boss: can we kill the target?",
        ],
        expTrigger: {
            marked: false,
            description: "Your strength couldn't solve the problem at hand.",
        },
        advancement: {
            marked: false,
            description: "Get caught up in a grudge you tried to forget. Retire."
        },
        gear: [
            {
                marked: false,
                description: "An Old Battle Trophy",
            },
            {
                marked: false,
                description: "Body Armor",
            },
            {
                marked: false,
                description: "A Sweet Ride",
            },
            {
                marked: false,
                description: "Live Grenade",
            },
        ],
        moves: [
            {
                marked: false,
                name: "Go Overboard",
                description: `Once per session, when you throw yourself into overwhelming danger, you can treat any played card as -1 rank and ignore any harm as consequence. This does not extend to your team. <em>(This doesn't reduce a 1 to a 0).</em>`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Signature Weapon",
                description: `You gain a new gear. Name it, then choose two properties it has.
                <ul class="hench-list-2-col">
                    <li>Scary</li>
                    <li>Deadly</li>
                    <li>Concealable</li>
                    <li>Quick</li>
                    <li>Unbreakable</li>
                    <li>Explosive</li>
                    <li>Explosive</li>
                    <li>Sniping</li>
                </ul>`,
                hasWriteIn: true,
                writeIn: "",
            },
            {
                marked: false,
                name: "Meathead",
                description: `Whenever you play a card and follow the cue, you can mark 1 stress to treat the card's suit as ♠ instead.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Parasocial",
                description: `Once per session, when you first meet a character, you can declare that you have wronged them in the past. The Boss will explain how. They will obsessively try to enact revenge against you for the slight.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Like Old Times",
                description: `As a downtime move, you can take an old friend out on the town. Describe how things were between you, back in the day and how you spend time with them now. Then, draw. Ignore the cue, and use the rank:
                <ul class="hench-list-1-col">
                    <li>1-2 — They want back on your good side. What is the same? What is different now?</li>
                    <li>3-4 — They might forgive you. What did you do to hurt them?</li>
                    <li>5-6 — Things will never be the same as they used to be. Why?</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
        ],
    },
    LABMAN: {
        details: [
            {
                question: "What was your first invention?",
                answer: "",
            },
            {
                question: "What secret project does the boss fund? Why is it doomed?",
                answer: "",
            }
        ],
        fixedInclinations: [
            "Using your intellect",
            "Doing something unexpected",
        ],
        missionPlanningQuestions: [
            "Present your new prototype weapon, which the target is probably weak to.",
            "State a fact about the target's defense systems.",
            "Ask the boss: what secret research is the target hiding?",
        ],
        expTrigger: {
            marked: false,
            description: "Your invention failed fantastically.",
        },
        advancement: {
            marked: false,
            description: "You finally finish your life's work. Retire."
        },
        gear: [
            {
                marked: false,
                description: "Futuristic Weapon",
            },
            {
                marked: false,
                description: "Hacking Suite",
            },
            {
                marked: false,
                description: "Dangerous Chemicals",
            },
            {
                marked: false,
                description: "Surgical Tools",
            },
        ],
        moves: [
            {
                marked: false,
                name: "Always Prepared",
                description: `At the beginning of the action, write a new piece of gear in below. Choose one flaw. You may use this gear this mission, without counting towards your slots. At the end of the mission, erase it.
                <ul class="hench-list-2-col">
                    <li>Inaccurate</li>
                    <li>Slow</li>
                    <li>Unstable</li>
                    <li>Cumbersome</li>
                </ul>`,
                hasWriteIn: true,
                writeIn: "",
            },
            {
                marked: false,
                name: "Wirey",
                description: `Treat all played ♣ cards as -1 rank. Treat all played ♠ cards as +1 rank. <em>(This won't turn a 1 into a 0, or a 6 into a 7).</em>`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Packmule",
                description: `Gain +1 gear slot. Your teammates can mark gear from your sheet, if you let them.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "I'm a PROFESSIONAL.",
                description: `When you take the tinker downtime action, mark 2 ticks instead of one.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Logistics",
                description: `As a downtime action you may tap your connections to procure something unusual. State what you're trying to find, then draw. Ignore the cue, and instead  use the rank:
                <ul class="hench-list-1-col">
                    <li>1-2 — You find a source in ample supply. However much you need, you got.</li>
                    <li>3-4 — You're able to squeeze out a sample. You have barely enough to work with.</li>
                    <li>5-6 — You catch trouble. Mark 2  heat.</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
        ],
    },
    DEMOTED: {
        details: [
            {
                question: "What was your old villain name? Why are you just a hench, now?",
                answer: "",
            },
            {
                question: "What leverage does the boss have on you?",
                answer: "",
            }
        ],
        fixedInclinations: [
            "Acting with excessive flair",
            "Attempting to reclaim your status",
        ],
        missionPlanningQuestions: [
            "The target's clearly a rookie. State an obvious flaw with their approach or gimmick.",
            "You've bested the target before. State how, and why you can't just do that again.",
            "Ask the boss: why hasn't the Guild taken out the target?",
        ],
        expTrigger: {
            marked: false,
            description: "Your old tricks weren't cut out for the job.",
        },
        advancement: {
            marked: false,
            description: "Earn back your title as supervillain. Retire."
        },
        gear: [
            {
                marked: false,
                description: "Gimmick Weapon",
            },
            {
                marked: false,
                description: "Old Uniform",
            },
            {
                marked: false,
                description: "Pyrotechnics",
            },
            {
                marked: false,
                description: "Your own calling card",
            },
        ],
        moves: [
            {
                marked: false,
                name: "Villain-ish",
                description: `You have a minor power or gimmick. Describe it. You may mark 1 stress at any time to use it.`,
                hasWriteIn: true,
                writeIn: "",
            },
            {
                marked: false,
                name: "You're Dead, Kiddo",
                description: `When you intimidate someone by describing a past villainous deed, treat any ♥ as -1 rank. <em>(This won't turn an ace into a 0)</em>.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "I've Seen Worse",
                description: `During The Action, you can help another character. Describe a similar memory from your past that has prepared you for this moment. They take +1 to their draw <em>(possibly up to 4 cards)</em>, and you take one stress.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Overqualified",
                description: `When a teammate fails to complete a task, and you confidently take control, you may treat your played card as any suit, but you cannot resist the consequences.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Friends in Low Places",
                description: `As a downtime move, you can ask an underworld contact to complete an unusual favor. State what you want, then draw. Ignore the cue, and instead use the rank:
                <ul class="hench-list-1-col">
                    <li>1-2 — They phone it in, but they do it.</li>
                    <li>3-4 — They do it sloppily. A new complication arises.</li>
                    <li>5-6 — You get roped into doing a favor for them during the next mission. If you fail to follow through, take 2 harm, "Damaged Reputation."</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
        ],
    },
    OUTCAST: {
        details: [
            {
                question: "Why has society rejected you?",
                answer: "",
            },
            {
                question: "Why has the boss taken you in?",
                answer: "",
            }
        ],
        fixedInclinations: [
            "Attempting to impress someone",
            "Acting against all social norms",
        ],
        missionPlanningQuestions: [
            "The target has treated you cruelly. State when, and how.",
            "You and the target have something in common. State what, and how that makes you feel.",
            "Ask the boss: Why do you hate the target?",
        ],
        expTrigger: {
            marked: false,
            description: "An attempt at connection was rejected.",
        },
        advancement: {
            marked: false,
            description: "A kinder community takes you in. Retire."
        },
        gear: [
            {
                marked: false,
                description: "Something Sentimental",
            },
            {
                marked: false,
                description: "Something of The Boss's",
            },
            {
                marked: false,
                description: "Something Misshapen",
            },
            {
                marked: false,
                description: "Something Dangerous",
            },
        ],
        moves: [
            {
                marked: true,
                name: "Teacher's Pet",
                description: `You live at the base, and are specially favored by the boss. Describe a privilege that only you receive. You cannot clock out.`,
                hasWriteIn: true,
                writeIn: "",
            },
            {
                marked: false,
                name: "Sore Thumb",
                description: `When you follow a cue, you can take 1 stress to gain an additional cue: “You attract the attention of everyone around.” <em>(Follow both cues).</em>`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Mutation",
                description: `Your body has been changed, somehow. Describe it. This alteration can be counted as gear, and does not take a slot.`,
                hasWriteIn: true,
                writeIn: "",
            },
            {
                marked: false,
                name: "Folie à Deux",
                description: `At the beginning of the action, choose another hench. Whenever they help you or show support, clear 1 stress. Whenever they fail or are hurt, take 1 stress.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Eavesdropper",
                description: `As a downtime move, you can lurk around where you shouldn't be and listen for secrets. Choose a target or an ally, then draw. Ignore the cue, and instead use the rank:
                <ul class="hench-list-1-col">
                    <li>1-2 — You overhear something no one else knows - a future plan, a haunting deed, or their shame.</li>
                    <li>3-4 — You overhear a common rumor - a worst held secret, a trick they've pulled, or a romantic tryst.</li>
                    <li>5-6 — You are discovered, and learn nothing. You make a personal enemy of them.</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
        ],
    },
    USURPER: {
        details: [
            {
                question: "What is your ultimate ambition?",
                answer: "",
            },
            {
                question: "What habit of the boss infuriates you the most?",
                answer: "",
            }
        ],
        fixedInclinations: [
            "Acting on hidden agendas.",
            "Putting yourself before anyone else.",
        ],
        missionPlanningQuestions: [
            "Describe how the target is uniquely equipped to defeat the boss.",
            "Describe how you are uniquely equipped to defeat the target.",
            "Ask the boss: are you really prepared for this mission?",
        ],
        expTrigger: {
            marked: false,
            description: "You had to act selflessly.",
        },
        advancement: {
            marked: false,
            description: "You finally overthrow the boss. Replace them."
        },
        gear: [
            {
                marked: false,
                description: "Concealed Weapon",
            },
            {
                marked: false,
                description: "Imitation Boss Uniform",
            },
            {
                marked: false,
                description: "Vial of Poison",
            },
            {
                marked: false,
                description: "False Evidence",
            },
        ],
        moves: [
            {
                marked: false,
                name: "Defiant",
                description: `When you act in opposition to the boss's orders, take 1 less stress if you resist consequences.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Steal the Spotlight",
                description: `When you claim the boss's actions as your own, clear 1 stress. If your audience believes you, clear 2.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Fall Guy",
                description: `When you would take harm, you may mark stress equal to the level to have a nearby hench or bystander take the harm instead.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Machinations",
                description: `At the start of each mission, secretly note your own goal for this mission. When you complete it, reveal it, and take a free flashback to explain how it fits into your larger plans. Then, you may mark 2 ticks on any one of your tinker clocks.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Understudy",
                description: `As a downtime action, you can take some henches on a minor crime spree. Explain your petty crimes, then draw. Ignore the cue, and instead use the rank:
                <ul class="hench-list-1-col">
                    <li>1-2 — You stir up some recognition and pride. Clear 1 heat, and mark 1 tick on one of your tinker clocks.</li>
                    <li>3-4 — The night is a blur. Describe something you've lost, and something you've gained.</li>
                    <li>5-6 — You cause a complete ruckus. Mark 2 heat.</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
        ],
    },
    TIMECARD: {
        details: [
            {
                question: "Who relies on you?",
                answer: "",
            },
            {
                question: "How did the boss convince you to take the job?",
                answer: "",
            }
        ],
        fixedInclinations: [
            "Invoking rules or regulations.",
            "Taking the laziest approach.",
        ],
        missionPlanningQuestions: [
            "State something that, by Guild rule, the target cannot do to you this mission.",
            "State something you refuse to do this mission.",
            "Ask the boss: How can we get a bonus on this job?",
        ],
        expTrigger: {
            marked: false,
            description: "You had to act above and beyond your usual duties.",
        },
        advancement: {
            marked: false,
            description: "Force them to fire you, and get your severance pay. Retire."
        },
        gear: [
            {
                marked: false,
                description: "An Old Getaway Car",
            },
            {
                marked: false,
                description: "Civilian Clothing",
            },
            {
                marked: false,
                description: "Corporate Credit Card",
            },
            {
                marked: false,
                description: "A Harmless Weapon",
            },
        ],
        moves: [
            {
                marked: false,
                name: "Icebreaker",
                description: `When you crack a joke while talking to an adversary, you may take 1 stress. If you do, they will not retaliate with violence. <em>(They might retaliate in other ways).</em>`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Time Theft",
                description: `When you haven't spoken in a while, you can use a flashback to reveal you've left the group to do something else. Take 0 stress for this flashback, and explain what frivolous task you've been occupied with. Then, you may reappear at the time and place of your choosing.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Fail Upward",
                description: `When you play a 6 and follow the cue, gain an additional cue: "Despite this, you succeed." <em>(Follow both cues).</em>`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Payday Advance",
                description: `You may treat any 2 you play as ♦.`,
                hasWriteIn: false,
                writeIn: null,
            },
            {
                marked: false,
                name: "Understudy",
                description: `As a downtime move, you can invite a fellow hench to join you in your hobby. Name the hobby, and how they're involved, then draw. Ignore the cue, and instead use the rank:
                <ul class="hench-list-1-col">
                    <li>1-2 — You have a wonderful time and brighten each others' spirits. Gain +1 card to your next obligation draw.</li>
                    <li>3-4 — They don't have a good time. Explain what goes wrong, and take 1 stress.</li>
                    <li>5-6 — You completely lose track of time. Lose a remaining downtime move, or take 1 harm "sleep deprived."</li>
                </ul>`,
                hasWriteIn: false,
                writeIn: null,
            },
        ],
    },
};

export function lookupPlaybook(key) {
    return playbooks[key];
}

export function validatePlaybookKey(key) {
    return playbookKeys.includes(key);
}

export function getGear(playbookGear) {
    const nullSafePlaybookGear = playbookGear ?? [];

    return [
        {
            marked: false,
            description: "Nonlethal Gun",
        },
        {
            marked: false,
            description: "A Small Weapon or Two",
        },
        {
            marked: false,
            description: "Spare Uniform",
        },
        {
            marked: false,
            description: "Lockpicks",
        },
        {
            marked: false,
            description: "The Boss's Calling Card",
        },
        ...nullSafePlaybookGear
    ];
}

export function getExpTriggers(playbookTrigger) {
    const baseTriggers = [
        {
            marked: false,
            description: "You acted on your inclinations.",
        },
        {
            marked: false,
            description: "You made the boss proud.",
        },
        {
            marked: false,
            description: "You got on the boss's nerves.",
        },
        {
            marked: false,
            description: "Your home life interfered with the mission.",
        },
    ];

    if(playbookTrigger  && playbookTrigger.description) {
        return [...baseTriggers, playbookTrigger];
    } else {
        return baseTriggers;
    }
}

export function getAdvancements(playbookAdvancement) {
    const baseAdvancements = [
        {
            marked: false,
            description: "Take another ability",
        },
        {
            marked: false,
            description: "Take another ability",
        },
        {
            marked: false,
            description: "Gear limit +1",
        },
        {
            marked: false,
            description: "Write in a 3rd inclination",
        },
        {
            marked: false,
            description: "Take an ability from another playbook.",
        },
    ];

    const exAdvancements = [
        {
            marked: false,
            description: "Change playbooks.",
        },
        {
            marked: false,
            description: "Quit for good. Retire.",
        },
    ];

    const hasValidPlaybookAdvancement = playbookAdvancement && playbookAdvancement.description;

    const finalExAdvancements = hasValidPlaybookAdvancement
        ? [...exAdvancements, playbookAdvancement]
        : exAdvancements;

    return {
        base: baseAdvancements,
        ex: finalExAdvancements
    };
}

export function getPlaybookMutation(playbookKey, prefix = '') {
    if(!validatePlaybookKey(playbookKey)) {
        return getPlaybookMutation(nullPlaybookKey, prefix);
    }

    const playbookInfo = lookupPlaybook(playbookKey);

    const advancements = getAdvancements(playbookInfo.advancement);
    const gear = getGear(playbookInfo.gear);
    const expTriggers = getExpTriggers(playbookInfo.expTrigger);

    let mutation = {};

    mutation[`${prefix}playbook`] = playbookKey;
    mutation[`${prefix}details`] = playbookInfo.details;
    mutation[`${prefix}fixedInclinations`] = playbookInfo.fixedInclinations;
    mutation[`${prefix}missionPlanning`] = playbookInfo.missionPlanningQuestions;
    mutation[`${prefix}fixedGear`] = gear;
    mutation[`${prefix}experienceTriggers`] = expTriggers;
    mutation[`${prefix}baseAdvancements`] = advancements.base;
    mutation[`${prefix}exAdvancements`] = advancements.ex;
    mutation[`${prefix}moves`] = playbookInfo.moves;

    return mutation;
}