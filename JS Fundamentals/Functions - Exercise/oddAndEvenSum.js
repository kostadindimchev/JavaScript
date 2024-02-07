function oddAndEvenSum(number) {
  let numberAsString = number.toString();

  let odds = oddSum(numberAsString);
  let evens = evenSum(numberAsString);
  console.log(`Odd sum = ${odds}, Even sum = ${evens}`);

  function oddSum(numberAsString) {
    let sumOfOdds = 0;
    for(let i = 0; i < numberAsString.length; i++) {
        if(numberAsString[i] % 2 !== 0) {
            sumOfOdds += Number(numberAsString[i]);
        }
    }
    return sumOfOdds;
  }

  function evenSum(numberAsString) {
    let sumOfEvens = 0;
    for(let i = 0; i < numberAsString.length; i++) {
        if(numberAsString[i] % 2 === 0) {
            sumOfEvens += Number(numberAsString[i]);
        }
    }
    return sumOfEvens;
  }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
