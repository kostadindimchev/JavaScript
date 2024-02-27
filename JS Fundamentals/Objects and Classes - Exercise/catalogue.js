function catalogue(array) {
    let letters = [];
    for (let el of array) {
        let firstLetter = el[0];
        letters.push(firstLetter)
    }

    let edited = letters
    .filter((item, index) => letters.indexOf(item) === index)
    .sort((a, b) => a.localeCompare(b))

    for(let i = 0; i < edited.length; i++) {
        console.log(edited[i]);
        let list = [];
        for(let j = 0; j < array.length; j++) {
            let curProduct = array[j];
            if(edited[i] === curProduct[0]) {
                list.push(curProduct)
            }
        }
        let sortedList = list.sort((a, b) => a.localeCompare(b))
        for (let el of sortedList) {
            let tokens = el.split(' : ');
            let name = tokens[0];
            let price = Number(tokens[1]);
            console.log(`  ${name}: ${price}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]);
