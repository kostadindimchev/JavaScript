function specialNumbers(num) {
    for(let number = 1; number <= num; number++) {
        let result = 0
        numberAsString = String(number)
        for(let i = 0; i < numberAsString.length; i++) {
            let curNumber = Number(numberAsString[i]);
            result += curNumber
        }

        if(result === 5 || result === 7 || result === 11) {
            console.log(`${number} -> True`);
        }else{
            console.log(`${number} -> False`);
        }
    }
}

specialNumbers(15);
specialNumbers(20);