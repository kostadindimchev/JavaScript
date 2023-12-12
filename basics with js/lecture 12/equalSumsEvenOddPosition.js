function equalSumsEvenOddPosition(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let result = ''

    for(let curNum = num1; curNum <= num2; curNum++) {

        let oddNumsSum = 0
        let evenNumsSum = 0

        let curNumAsString = curNum.toString()

        for(let i = 0; i < curNumAsString.length; i++) {
            let curDigit = Number(curNumAsString[i])

            let position = i + 1

            if(position % 2 === 0){
                evenNumsSum += curDigit
            }else{
                oddNumsSum += curDigit
            }

        }

        if(evenNumsSum === oddNumsSum) {
            result += curNumAsString + " ";
        }
    }

    console.log(result);

}
equalSumsEvenOddPosition(["123456",

"124000"])