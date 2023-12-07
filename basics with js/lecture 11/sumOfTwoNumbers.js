function sumOfTwoNumbers(input) {
    let first = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let result = 0
    let isFound = false
    let combinations = 0

    for(x = first; x <= end; x++) {
        for(y = first; y <= end; y++){
            combinations++
            result = x + y
            if(result === magicNum){
                isFound = true
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(isFound) {
        console.log(`Combination N:${combinations} (${x} + ${y} = ${magicNum})`);
    }else{
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }

}
sumOfTwoNumbers(["23",
"24",
"20"])