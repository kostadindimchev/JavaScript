function vacation(input) {
    let index = 0
    let spendCounter = 0
    let daysPassed = 0

    let vacationCost = Number(input[index]);
    index++
    let moneyAvailable = Number(input[index]);
    index++
    let action = input[index];
    index++
    let actionMoney = Number(input[index]);
    index++

    while(moneyAvailable < vacationCost){
        daysPassed++

        if(action === 'save') {
            moneyAvailable += actionMoney
            spendCounter = 0
        }else if(action === 'spend'){
            moneyAvailable -= actionMoney
            if(moneyAvailable < 0) {
                moneyAvailable = 0
            }
            spendCounter++
            if(spendCounter >= 5){
                console.log("You can't save the money.");
                console.log(daysPassed);
                break;
            }
        }

        action = input[index];
        index++

        actionMoney = Number(input[index]);
        index++
    }

    if(moneyAvailable >= vacationCost) {
    console.log(`You saved the money for ${daysPassed} days.`);
    }

}

vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])