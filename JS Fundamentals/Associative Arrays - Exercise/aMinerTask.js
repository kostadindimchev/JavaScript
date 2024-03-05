function aMinerTask(input) {
    let result = {};

    for(let index = 0; index < input.length; index += 2) {
        let resourse = input[index];
        let qty = Number(input[index + 1]);
        
        if(!result.hasOwnProperty(resourse)) {
            result[resourse] = qty
        }else{
            result[resourse] += qty
        }
    }

    for(let [resourse, qty] of Object.entries(result)) {
        console.log(`${resourse} -> ${qty}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);