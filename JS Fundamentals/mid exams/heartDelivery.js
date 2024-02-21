function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let curInput = input.shift();
    let cupid = 0;

    while(curInput !== 'Love!') {
        let tokens = curInput.split(' ')
        let jumpLength = Number(tokens[1]);
        cupid += jumpLength;

        if(cupid >= Number(neighborhood.length)) {
            cupid = 0
        }

        let house = neighborhood.splice(cupid, 1);
        if(Number(house) - 2 > 0) {
            house -= 2;
        }else if(Number(house) - 2 === 0) {
            house -= 2
            console.log(`Place ${cupid} has Valentine's day.`);
        }else{
            console.log(`Place ${cupid} already had Valentine's day.`);
        }
        neighborhood.splice(cupid, 0, house)

        curInput = input.shift();
    }

    console.log(`Cupid's last position was ${cupid}.`);

    let failed = 0
    for (let el of neighborhood) {
        if(el > 0) {
            failed++
        }
    }

    if(failed === 0) {
        console.log("Mission was successful.");
    }else{
        console.log(`Cupid has failed ${failed} places.`);
    }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);

