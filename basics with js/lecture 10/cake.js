function cake(input) {
    let index = 0
    let width = Number(input[index]);
    index++
    let length = Number(input[index]);
    index++

    let cakeSize = width * length

    let piecesTaken = input[index];
    index++

    while(piecesTaken !== "STOP") {
        piecesTaken = Number(piecesTaken);

        cakeSize -= piecesTaken

        if(cakeSize <= 0) {
        break;
        }

        piecesTaken = input[index];
        index++
    }
    if(cakeSize > 0) {
    console.log(`${cakeSize} pieces are left.`);
    }else{
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
    }

}

cake(["10",
"2",

"2",

"4",

"6",

"STOP"])