function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let count = Number(input[2]);
    let price = 0
    let discount = 0

    if(fruit === 'Watermelon') {
        switch(size) {
            case 'small':
                price = 2 * 56 * count
                break;
            case 'big':
                price = 5 * 28.70 * count
                break;
        }
    }else if(fruit === 'Mango') {
        switch(size) {
            case 'small':
                price = 2 * 36.66 * count
                break;
            case 'big':
                price = 5 * 19.60 * count
                break;
        }
    }else if(fruit === 'Pineapple') {
        switch(size) {
            case 'small':
                price = 2 * 42.10 * count
                break;
            case 'big':
                price = 5 * 24.80 * count
                break;
        }
    }else if(fruit === 'Raspberry') {
        switch(size) {
            case 'small':
                price = 2 * 20 * count
                break;
            case 'big':
                price = 5 * 15.20 * count
                break;
        }
    }

    if(price >= 400 && price <= 1000) {
        discount = 0.15 * price
    }else if(price > 1000) {
        discount = 0.5 * price
    }

    console.log(`${(price - discount).toFixed(2)} lv.`);

}
energyBooster(["Watermelon",
"big",
"4"])
