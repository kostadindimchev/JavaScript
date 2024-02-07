function factorialDivision(numOne, numTwo) {
    
    function factorial(num) {
        let factorial = num
        while(num !== 1) {
            num--
            factorial *= num
        }
        return factorial
    }

    let factorialNumOne = factorial(numOne);
    let factorialNumTwo = factorial(numTwo);
    let result = Number(factorialNumOne) / Number(factorialNumTwo)
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);