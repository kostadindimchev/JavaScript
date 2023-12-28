function mountainRun(input) {
    let recordInSecs = Number(input[0]);
    let distance = Number(input[1]);
    let secsPerMeter = Number(input[2]);

    let slowingTimes = Math.floor(distance / 50)
    let slowing = slowingTimes * 30
    let georgiTime = (distance * secsPerMeter) + slowing

    if(georgiTime < recordInSecs) {
        console.log(`Yes! The new record is ${georgiTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No! He was ${(georgiTime - recordInSecs).toFixed(2)} seconds slower.`);
    }
}
mountainRun(["5554.36",
"1340",
"3.23"])

