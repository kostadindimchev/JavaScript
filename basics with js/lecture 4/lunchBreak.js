function lunchBreak(input) {
    let movieName = input[0];
    let epLenght = Number(input[1]);
    let breakLenght = Number(input[2]);

    let lunchTime = 1/8 * breakLenght;
    let relaxTime = 1/4 * breakLenght;
    let timeLeft = breakLenght - (lunchTime + relaxTime);

    if(timeLeft >= epLenght) {
        let freeTime = Math.ceil(timeLeft - epLenght)
        console.log(`You have enough time to watch ${movieName} and left with ${freeTime} minutes free time.`);
    }else{
        let timeNeed = Math.ceil(epLenght - timeLeft)
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeed} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",

"48",

"60"]);