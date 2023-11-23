function shopping(input) {
    let budget = Number(input[0]);
    let gCardsCount = Number(input[1]);
    let procesorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gCardsPrice = gCardsCount * 250;
    let procesorsPrice = 0.35 * gCardsPrice * procesorsCount;
    let ramPrice = 0.10 * gCardsPrice * ramCount;

   
    let sum = gCardsPrice + procesorsPrice + ramPrice;
    if(gCardsCount > procesorsCount) {
        sum = 0.85 * sum;
    }

    if(sum <= budget){
        let budgetLeft = budget - sum;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
    }else{
        let moneyNeed = sum - budget;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva more!`);
    }
}

shopping(["920.45",

"3",

"1",

"1"]);