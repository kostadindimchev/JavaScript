function basketballEquipment(input) {
    let yearlyTax = Number(input[0]);
    let sneekers = yearlyTax - 0.4 * yearlyTax;
    let kit = sneekers - 0.2 * sneekers;
    let ball = 1/4 * kit;
    let accessory = 1/5 * ball;

    let totalSum = yearlyTax + sneekers + kit + ball + accessory;
    console.log(totalSum);
}

basketballEquipment(["550"])