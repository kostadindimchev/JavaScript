function storeCatalogue(array) {
    let sorted = array.sort((a, b) => a.localeCompare(b))
    let curLetter = ''
    
    for (let line of sorted) {
        let firstLetter = line[0]
        if(firstLetter !== curLetter){
            console.log(firstLetter);
        }
        curLetter = firstLetter;

        let [name, price] = line.split(' : ')
        console.log(`  ${name}: ${price}`);
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
storeCatalogue(["Banana : 2','Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);