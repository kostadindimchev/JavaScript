function sumSeconds(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let totalTime = time1 + time2 + time3
    let mins = Math.floor(totalTime / 60)
    let secs = totalTime % 60

    if (secs < 10) {
        console.log(`${mins}:0${secs}`);
    }else{
        console.log(`${mins}:${secs}`);
    }
}

sumSeconds(["14", "12", "10"])