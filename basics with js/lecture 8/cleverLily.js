function cleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let totalMoney = 0
    let moneyGiven = 10

    for(let i = 1; i <= age; i++) {
        if(i % 2 !== 0) {
            totalMoney += toyPrice
        }else{
            totalMoney += (moneyGiven - 1)
            moneyGiven += 10
        }
    }

    if(totalMoney >= washerPrice) {
        let moneyLeft = totalMoney - washerPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }else{
        let moneyNeeded = washerPrice - totalMoney
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(["21",

"1570.98",

"3"])
