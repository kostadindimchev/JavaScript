function perfectNumber(number) {
    let divisorsSum = 0;
    for(let i = 1; i <= number / 2; i++) {
        if(number % i === 0) {
            divisorsSum += i
        }
    }

    console.log(divisorsSum === number ? "We have a perfect number!" : "It's not so perfect.");
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);