function depositCalculator (input) {
    let depositedSum = Number(input[0]);
    let termMonth = Number(input[1]);
    let yearlyInterest = Number(input[2]);

    let interest = depositedSum * yearlyInterest / 100
    let monthlyInterest = interest / 12
    let sum = depositedSum + termMonth * monthlyInterest
    
    console.log(sum);
}

depositCalculator(["2350" ,"6", "7"])