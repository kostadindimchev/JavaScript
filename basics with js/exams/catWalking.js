function catWalking(input) {
    let minutesWalking = Number(input[0]);
    let walkingsDaily = Number(input[1]);
    let calories = Number(input[2]);

    let calsBurned = minutesWalking * walkingsDaily * 5
    let halfOfCals = 0.5 * calories

    if(calsBurned >= halfOfCals) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${calsBurned}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${calsBurned}.`);
    }

}
catWalking(["30",
"3",
"600"])
