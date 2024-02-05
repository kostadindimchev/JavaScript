function mathPower(n, pow) {
    let result = 1
    for(let i = 1; i <= pow; i++) {
        result *= n
    }

    console.log(result);
}

mathPower(2, 8);
mathPower(3, 4);