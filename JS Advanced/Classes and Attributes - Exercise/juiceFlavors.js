function juiceFlavors(input){
    const storage = {};
    const bottles = {}

    while(input.length > 0){
        let line = input.shift()
        let [flavor, qty] = line.split(' => ');

        if(!storage[flavor]){
            storage[flavor] = 0
        }

        storage[flavor] += Number(qty)

        if(storage[flavor] >= 1000){
            if(!bottles[flavor]){
                bottles[flavor] = 0
            }
            bottles[flavor] += Math.floor(storage[flavor] / 1000)
            storage[flavor] -= bottles[flavor] * 1000
        }
    }

    Object
    .entries(bottles)
    .forEach(x => console.log(`${x[0]} => ${x[1]}`))
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);