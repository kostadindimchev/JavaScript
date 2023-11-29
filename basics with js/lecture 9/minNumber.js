function minNumber(input) {
    let minNum = Number.MAX_SAFE_INTEGER
    let index = 0
    let curElement = input[index]

    while(curElement !== "Stop") {
        let curNum = Number(curElement)
        if(curNum < minNum){
            minNum = curNum   
        }
        index++
        curElement = input[index]
    }

    console.log(minNum);
}
minNumber(["45", "-20", "7", "99", "Stop"])