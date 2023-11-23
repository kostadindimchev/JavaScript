function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzelsCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let sum = puzzelsCount * 2.60 + dollsCount * 3.00 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2.00;
    let totalCount = puzzelsCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if(totalCount >= 50) {
        sum = 0.75 * sum;
    }

    sum = 0.90 * sum;

    if(sum >= vacationPrice) {
        let moneyLeft = sum - vacationPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }else{
        let moneyNeeded = vacationPrice - sum
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"])