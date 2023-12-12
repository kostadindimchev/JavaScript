function specialNumbers(input) {
    let num = Number(input[0]);
    let result = '';

    for (let numb = 1111; numb <= 9999; numb++) {
    
        let isSpecial = true
        let numbAsStr = numb.toString()

        for(let i = 0; i < numbAsStr.length; i++) {
            
            let curDigit = Number(numbAsStr[i])

            if(num % curDigit !== 0){
                isSpecial = false;
                break;
            }

        }

        if(isSpecial) {
            result += numb + ' ';
        }
    }

    console.log(result);

}
specialNumbers(["16"])