function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothesPerActor = Number(input[2]);

    let decor = 0.1 * budget;
    let clothesPrice = actorsCount * clothesPerActor;
    if(actorsCount > 150) {
        clothesPrice = 0.9 * clothesPrice;
    }

    totalPrice = decor + clothesPrice;

    if(totalPrice > budget) {
        let moneyNeeded = totalPrice - budget
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }else{
        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
    
}

godzillaVsKong(["15437.62",

"186",

"57.99"]);