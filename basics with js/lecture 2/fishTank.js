function fishTank(input) {
    let length = Number(input[0]);
    let wide = Number(input[1]);
    let height = Number(input[2]);
    let occupiedSpace = Number(input[3]);

    let volume = length * wide * height;
    let volumeInLiters = volume / 1000;
    let occupiedSpaceDecimal = occupiedSpace / 100

    let neededLiters = volumeInLiters * (1-occupiedSpaceDecimal);
    console.log(neededLiters);
}

fishTank(["85 ","75 ","47 ","17 "])