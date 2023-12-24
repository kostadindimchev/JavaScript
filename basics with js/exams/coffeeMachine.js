function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let drinksCount = Number(input[2]);
    let price = 0

    switch(drink) {
        case 'Espresso':
            if(sugar === 'Without') {
                price = 0.9
            }else if(sugar === 'Normal') {
                price = 1
            }else if(sugar === 'Extra') {
                price = 1.2
            }
            break;
        
        case 'Cappuccino':
            if(sugar === 'Without') {
                price = 1
            }else if(sugar === 'Normal') {
                price = 1.2
            }else if(sugar === 'Extra') {
                price = 1.6
            }
            break;

        case 'Tea':
            if(sugar === 'Without') {
                price = 0.5
            }else if(sugar === 'Normal') {
                price = 0.6
            }else if(sugar === 'Extra') {
                price = 0.7
            }
            break;
    }

    let totalPrice = drinksCount * price

    if(sugar === 'Without') {
        totalPrice = 0.65 * totalPrice
    }

    if(drink === 'Espresso' && drinksCount >= 5) {
        totalPrice = 0.75 * totalPrice
    }

    if(totalPrice > 15) {
        totalPrice = 0.8 * totalPrice
    }

    console.log(`You bought ${drinksCount} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`)

}
coffeeMachine(["Cappuccino",
"Normal",
"13"])
