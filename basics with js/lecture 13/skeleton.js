function skeleton(input) {
    let minutes = Number(input[0]);
    let seconds = Number(input[1]);
    let length = Number(input[2]);
    let secondsFor100Meters = Number(input[3]);

    let minsInSecs = minutes * 60
    let slowedTime = (length / 120) * 2.5
    let marinTime = (length / 100) * secondsFor100Meters - slowedTime
    let controlTime = minsInSecs + seconds

    if(marinTime > controlTime) {
        console.log(`No, Marin failed! He was ${(marinTime - controlTime).toFixed(3)} second slower.`);
    }else{
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    }

}
skeleton(["1",

"20",

"1546",

"12"])