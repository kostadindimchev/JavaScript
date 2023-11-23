function worldSwimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let initialTime = distance * timePerMeter;
    let delayTime = Math.floor(distance / 15) * 12.5
    let totalTime = initialTime + delayTime;

    if(totalTime < currentRecord) {
       console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        let secondsLeft = totalTime - currentRecord
        console.log(`No, he failed! He was ${secondsLeft.toFixed(2)} seconds slower.`);
    }   

}

worldSwimmingRecord(["55555.67","3017","5.03"]);