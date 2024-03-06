function cardGame(input) {
    let collection = {}

    let cardNumbers = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }

    let cardColors = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4,
    }

    for (let line of input) {
        let [person, cards] = line.split(': ');
        cards = cards.split(', ')

        if(!collection.hasOwnProperty(person)) {
            collection[person] = new Set();
        }

        for (let card of cards) {
            collection[person].add(card)
        }
    }   
    
    for(let [person, cards] of Object.entries(collection)) {
        let power = 0

        for (let card of cards) {
            let number = cardNumbers[card[0]]
            let color = cardColors[card.slice(-1)]
            power += number * color
        }
    
        console.log(`${person}: ${power}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);