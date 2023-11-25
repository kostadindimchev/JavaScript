function cinema(input) {
    let filmType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let tickets = rows * cols;
    let funds = 0

    if(filmType === "Premiere") {
        funds = tickets * 12;
    } else if(filmType === "Normal") {
        funds = tickets * 7.5;
    } else if(filmType === "Discount") {
        funds = tickets * 5
    }

    console.log(`${funds.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"])