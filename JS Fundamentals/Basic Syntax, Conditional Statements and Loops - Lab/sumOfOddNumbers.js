function sumOfOddNumbers(n) {
    for(let i = 1; i <= 2 * n; i += 2) {
        console.log(i);
    }

    console.log(`Sum: ${n * n}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);