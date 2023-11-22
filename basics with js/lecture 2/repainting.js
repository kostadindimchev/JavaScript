function repainting(input) {
    let naylonQty = Number(input[0]);
    let paintQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let workHours = Number(input[3]);

    let naylonPrice = (naylonQty + 2) * 1.50;
    let paintPrice = (paintQty + 10/100 * paintQty)  * 14.50;
    let thinnerPrice = thinnerQty * 5;

    let materialsPrice = naylonPrice + paintPrice + thinnerPrice + 0.40;
    let workPriceHour = 30/100 * materialsPrice
    let workPrice = workPriceHour * workHours

    let sum = materialsPrice + workPrice
    console.log(sum);
}

repainting (["5 ","10 ","10 ","1 "])