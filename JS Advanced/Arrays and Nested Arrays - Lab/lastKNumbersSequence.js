function lastKNumbersSequence(n ,k) {
    let sequence = [1];

    for(let i = 0; i < n - 1; i++){
        let sum = 0;
        for(let j = i - k + 1; j <= i; j++){
            if(sequence[j] !== undefined) {
            sum += Number(sequence[j]);
            }
        }
        sequence.push(sum);
    }
    return sequence;
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);