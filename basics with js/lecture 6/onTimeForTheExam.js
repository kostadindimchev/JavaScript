function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examInMins = (examHour * 60) + examMin;
    let arriveInMins = (arriveHour * 60) + arriveMin;
    let delayMins = 0
    let delayHours = 0

    if(arriveInMins > examInMins) {
        console.log('Late');
        delayMins = arriveInMins - examInMins
            if(delayMins < 60) {
                console.log(`${delayMins} minutes after the start`);
            }else{
                delayHours = delayMins / 60
                delayMins = delayMins % 60
                if(delayMins >= 10) {
                    console.log(`${Math.floor(delayHours)}:${delayMins} hours after the start`);
                }else{
                    console.log(`${Math.floor(delayHours)}:0${delayMins} hours after the start`);   
                }
            }

    } else if (arriveInMins === examInMins || (examInMins - arriveInMins) <= 30){
        if(arriveInMins === examInMins) {
            console.log('On time');
        }else{ 
            console.log('On time');
            delayMins = examInMins - arriveInMins
            console.log(`${delayMins} minutes before the start`);
        }
    }else{
        console.log('Early');
        delayMins = examInMins - arriveInMins
        if(delayMins < 60) {
            console.log(`${delayMins} minutes before the start`);
        }else{
            delayHours = delayMins / 60
            delayMins = delayMins % 60
            if(delayMins >= 10) {
                console.log(`${Math.floor(delayHours)}:${delayMins} hours before the start`);
            }else{
                console.log(`${Math.floor(delayHours)}:0${delayMins} hours before the start`);   
            }
        }

    }
}

onTimeForTheExam(["9",

"00",

"8",

"30"])