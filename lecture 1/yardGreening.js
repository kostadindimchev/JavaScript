function yardGreenings(input) {
    let count = Number(input[0]);
    let price = 7.61 * count;
    let discount = price * 0.18;
    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreenings([550]);