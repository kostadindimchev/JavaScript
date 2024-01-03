function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entryTax = Number(input[1]);
    let loungers = Number(input[2]);
    let umbrellas = Number(input[3]);

    let entrySum = peopleCount * entryTax
    let loungersPrice = Math.ceil(0.75 * peopleCount) * loungers
    let umbrellasPrice = Math.ceil(0.50 * peopleCount) * umbrellas

    let sum = entrySum + loungersPrice + umbrellasPrice

    console.log(`${sum.toFixed(2)} lv.`);

}
poolDay(["21",
"5.50",
"4.40",
"6.20"])
