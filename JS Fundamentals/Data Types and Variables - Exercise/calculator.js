function calculator(number, operator, anotherNumber) {
  let result = 0;
  switch (operator) {
    case "+":
      result = number + anotherNumber;
      break;
    case "-":
      result = number - anotherNumber;
      break;
    case "*":
      result = number * anotherNumber;
      break;
    case "/":
      result = number / anotherNumber;
      break;
  }

  console.log(result.toFixed(2));
}

calculator(5, "+", 10);
calculator(25.5, "-", 3);
