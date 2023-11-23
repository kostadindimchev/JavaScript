function timePlus15Minutes (input) {
    let hours = Number(input[0]);
    let mins = Number(input[1]);
    let totalMins = hours * 60 + mins + 15;
    let hoursAfter = Math.floor(totalMins / 60)
    let minsAfter = totalMins % 60

    if(hoursAfter === 24) {
        hoursAfter = 0;
    }
    

    if(minsAfter < 10) {
        console.log(`${(hoursAfter)}:0${minsAfter}`);
    }else{
        console.log(`${(hoursAfter)}:${minsAfter}`);
    }

}

timePlus15Minutes(["23", "59"])