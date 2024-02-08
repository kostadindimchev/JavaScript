function palindromeIntegers(input) {
    for (const currNum of input) {
        let reversed = currNum.toString().split('').reverse().join('');
        console.log(Number(reversed) === Number(currNum) ? true : false);
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);