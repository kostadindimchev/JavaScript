function familyTrip(input) {
    let budget = Number(input[0]);
    let overnights = Number(input[1]);
    let overnightPrice = Number(input[2]);
    let percentExpenses = Number(input[3]);

    if(overnights > 7) {
        overnightPrice = 0.95 * overnightPrice
    }

    let expenses = (percentExpenses / 100) * budget
    let price = overnights * overnightPrice + expenses

    if(price <= budget) {
        console.log(`Ivanovi will be left with ${(budget - price).toFixed(2)} leva after vacation.`);
    }else{
        console.log(`${(price - budget).toFixed(2)} leva needed.`);
    }

}
familyTrip(["800.50",
"8",
"100",
"2"])
