function lettersChangeNumbers(input) {
    let sum = 0;
    input = input.split(' ').filter((x) => x !== '')
    
    for (let el of input) {
        el = el.split('');
        let firstLetter = el.shift()
        let lastLetter = el.pop()
        let num = el.join('')

        if(isUpperCase(firstLetter)){
            num /= alphabet(firstLetter)
        }else{
            num *= alphabet(firstLetter)
        }

        if(isUpperCase(lastLetter)){
            num -= alphabet(lastLetter)
        }else{
            num += alphabet(lastLetter)
        }

        sum += num;
    }

    console.log(sum.toFixed(2));

    
    function alphabet(letter) {
        letter = letter.toLocaleLowerCase();
        let position = letter.charCodeAt() - 96;
        return position
    }

    function isUpperCase(letter) {
        if(letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90){
            return true;
        }
    } 
}

lettersChangeNumbers('A12b  s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');