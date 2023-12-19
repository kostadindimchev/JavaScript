function paintingEggs(input) {
    let size = input[0];
    let color = input[1];
    let count = Number(input[2]);
    let price = 0

    switch(size) {
        case 'Large': 
            if(color === 'Red') {
                price = 16 * count;
            }else if(color === 'Green') {
                price = 12 * count;
            }else if(color === 'Yellow') {
                price = 9 * count;
            }
            break;

        case 'Medium':
            if(color === 'Red') {
                price = 13 * count;
            }else if(color === 'Green') {
                price = 9 * count;
            }else if(color === 'Yellow') {
                price = 7 * count;
            }
            break;

        case 'Small': 
            if(color === 'Red') {
                price = 9 * count;
            }else if(color === 'Green') {
                price = 8 * count;
            }else if(color === 'Yellow') {
                price = 5 * count;
            }
            break;
    }

    let totalPrice = price * 0.65;

    console.log(`${totalPrice.toFixed(2)} leva.`);
    
}
paintingEggs(["Small", "Yellow", "3"])