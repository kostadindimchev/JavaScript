function arenaTier(input) {
    let result = {};
    let skills = {};

    while(input[0] !== 'Ave Cesar') {
        let curLine = input.shift();

        if(curLine.includes(' -> ')) {
            let [gladiator, technique, skill] = curLine.split(' -> ');
            skill = +skill;

            if(!result.hasOwnProperty(gladiator)) {
                result[gladiator] = new Map();
                skills[gladiator] = 0
            }

            if(skill < result[gladiator].get(technique)) {
                continue;
            }

            result[gladiator].set(technique, skill);
            skills[gladiator] += skill;

        }else{
            let [gladiatorOne, gladiatorTwo] = curLine.split(' vs ');

            if(result[gladiatorOne] === undefined || result[gladiatorTwo] === undefined) {
                continue;
            }

            let duelistOne = Array.from(result[gladiatorOne].keys());
            let duelistTwo = Array.from(result[gladiatorTwo].keys());
            
            for (let el of duelistOne) {
                for (let elem of duelistTwo) {
                    if(el === elem) {
                        if(skills[gladiatorOne] > skills[gladiatorTwo]) {
                            delete result[gladiatorTwo];
                            delete skills[gladiatorTwo];
                        }else{
                            delete result[gladiatorOne];
                            delete skills[gladiatorOne];
                        }
                    }
                }
                break;
            }
        }
    }
    let skillSort = Object
    .entries(skills)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

    for (let gladiator of skillSort) {
        console.log(`${gladiator[0]}: ${gladiator[1]} skill`);
        let techniques = Array
        .from(result[gladiator[0]].entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

        for (let technique of techniques) {
            console.log(`- ${technique[0]} <!> ${technique[1]}`);
        }
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);


arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);