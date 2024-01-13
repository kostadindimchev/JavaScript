function amazingNumbers(num) {
    let result = 0
    let isSpecial = false
    numAsString = String(num)
    for(let i = 0; i < numAsString.length; i++) {
        let curNum = Number(numAsString[i]);
        result += curNum
    }

    let resultAsStr = String(result)
    for(let i = 0; i < resultAsStr.length; i++) {
        let curDigit = Number(resultAsStr[i]);
        if(curDigit === 9) {
            isSpecial = true
        }
    }
    
    console.log(`${num} Amazing? ${isSpecial ? 'True' : 'False'}`);
}

amazingNumbers(1233);
amazingNumbers(999);