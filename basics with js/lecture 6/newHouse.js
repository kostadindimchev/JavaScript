function newHouse(input) {
    let flower = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0

    switch(flower) {
        case 'Roses':
            price = count * 5
            break;
        case 'Dahlias':
            price = count * 3.8
            break;
        case 'Tulips':
            price = count * 2.8
            break;
        case 'Narcissus':
            price = count * 3
            break;
        case 'Gladiolus':
            price = count * 2.5
            break;
    }

    if(flower === 'Roses' && count > 80) {
        price *= 0.9
    }else if(flower === 'Dahlias' && count > 90) {
        price *= 0.85
    }else if(flower === 'Tulips' && count > 80) {
        price *= 0.85
    }else if(flower === 'Narcissus' && count < 120) {
        price *= 1.15
    }else if(flower === 'Gladiolus' && count < 80) {
        price *= 1.2
    }

    if(budget >= price) {
        let moneyLeft = budget - price
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${moneyLeft.toFixed(2)} leva left.`);
    }else if(budget < price) {
        let moneyNeeded = price - budget
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

newHouse(["Tulips",

"88",

"260"])