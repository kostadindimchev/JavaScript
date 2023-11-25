function hotelRoom(input) {
    let month = input[0];
    let overnights = Number(input[1]);
    let studioPrice = 0
    let apartmentPrice = 0

    if(month ==='May' || month === 'October') {
        studioPrice = 50 * overnights
        if(overnights > 14) {
            studioPrice *= 0.70
        }else if(overnights > 7){
            studioPrice *= 0.95
        }
        apartmentPrice = 65 * overnights
        if(overnights > 14) {
            apartmentPrice *= 0.90
        }
    }else if(month === 'June' || month === 'September') {
        studioPrice = 75.20 * overnights
        if(overnights > 14){
            studioPrice *= 0.80
        }
        apartmentPrice = 68.70 * overnights
        if(overnights > 14) {
            apartmentPrice *= 0.90
        }
    }else if(month === 'July' || month === 'August') {
        studioPrice = 76 * overnights
        apartmentPrice = 77 * overnights
        if(overnights > 14) {
            apartmentPrice *= 0.90
        }
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"])