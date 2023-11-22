function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegMenus = Number(input[2]);

    let chickenPrice = chickenMenus * 10.35;
    let fishPrice = fishMenus * 12.40;
    let vegPrice = vegMenus * 8.15;

    let sum = chickenPrice + fishPrice + vegPrice;
    let desert = 0.2 * sum;

    let totalSum = sum + desert + 2.50;
    console.log(totalSum);
}

foodDelivery(["2 ","4 ","3 "])