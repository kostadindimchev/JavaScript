function biggestElement(array) {
    let count = Number(array.length);
    let biggestNums = [];

    for(let i = 0; i < count; i++){
        let sorted = array[i].sort((a, b) => b - a);
        biggestNums.push(sorted[0]);
    }

    let biggestNum = biggestNums.sort((a, b) => b - a)[0];
    console.log(biggestNum);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);