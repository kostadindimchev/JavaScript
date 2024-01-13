function triangleOfNumbers(num) {
   for(let i = 1; i <= num; i++) {
    let result = '';
    for(let j = 1; j <= i; j++) {
        result += i
        if(j !== i) {
            result += ' ';
        }
    }
    console.log(result);
   }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);