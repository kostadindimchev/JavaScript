function suppliesForSchool(input) {
    let pencilPackets = Number(input[0]);
    let markerPackets = Number(input[1]);
    let cleaningDetergent = Number(input[2]);
    let discountPercent = Number(input[3]);

    let discountDecimal = discountPercent / 100;
    let pencilPacketsPrice = pencilPackets * 5.80;
    let markerPacketsPrice = markerPackets * 7.20;
    let cleaningDetergentPrice = cleaningDetergent * 1.20;

    let sum = pencilPacketsPrice + markerPacketsPrice + cleaningDetergentPrice
    let sumWithDiscount = sum - (sum * discountDecimal)

    console.log(sumWithDiscount);
}

suppliesForSchool(["2 ","3 ","4 ","25 "])