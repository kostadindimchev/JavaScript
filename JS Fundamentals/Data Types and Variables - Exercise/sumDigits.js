function sumDigits(number) {
  let sum = 0;
  let numberAsString = number.toString();
  for (const digit of numberAsString) {
    sum += Number(digit);
  }
  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
