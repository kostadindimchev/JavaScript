function sumOfNumbersNM(n, m) {
    let start = Number(n);
    let end = Number(m);
    let result = 0;

    for(let i = start; i <= end; i++){
        result += Number(i)
    }
    return result
}

sumOfNumbersNM('1', '5' );
sumOfNumbersNM('-8', '20');