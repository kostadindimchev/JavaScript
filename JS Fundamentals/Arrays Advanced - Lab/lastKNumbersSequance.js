function lastKNumbersSequance(n, k) {
    let sequance = [1];
    for(let i = 1; i < n; i++){
        let lastK = sequance.slice(-k);
        let lastKSum = 0
        for (let element of lastK) {
            lastKSum += Number(element)
        }
        sequance.push(lastKSum)
    }

    console.log(sequance.join(' '));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);