function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let overnights = days - 1;
    let price = 0

    if(overnights < 10) {
        switch(roomType) {
            case 'room for one person':
            price = overnights * 18
            break;
            case 'apartment':
            price = 0.7 * overnights * 25
            break;
            case 'president apartment':
            price = 0.9 * overnights * 35
        }
    }else if(overnights <= 15) {
        switch(roomType) {
            case 'room for one person':
            price = overnights * 18
            break;
            case 'apartment':
            price = 0.65 * overnights * 25
            break;
            case 'president apartment':
            price = 0.85 * overnights * 35
        }
    }else{
        switch(roomType) {
            case 'room for one person':
            price = overnights * 18
            break;
            case 'apartment':
            price = 0.5 * overnights * 25
            break;
            case 'president apartment':
            price = 0.8 * overnights * 35
        }
    }

    switch(feedback) {
        case 'positive':
            price *= 1.25;
            break;
        case 'negative':
            price *= 0.9;
            break;
    }

    console.log(price.toFixed(2));
}

skiTrip(["12", "room for one person", "positive"])