function minNumber(input) {
    let maxNum = Number.MIN_SAFE_INTEGER
    let index = 0
    let curElement = input[index]

    while(curElement !== "Stop") {
        let curNum = Number(curElement)
        if(curNum > maxNum){
            maxNum = curNum   
        }
        index++
        curElement = input[index]
    }

    console.log(maxNum);
}
minNumber(["45", "-20", "7", "99", "Stop"])