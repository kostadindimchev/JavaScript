function numberPyramid(input) {
    let maxNum = Number(input[0]);
    let curNum = 1
    let curRow = 1
    let curRowNums = 0
    let result = ''

    while(curNum <= maxNum) {
        if(curRowNums < curRow) {
            curRowNums++
            result += `${curNum} `
        }else{
            result += `\n${curNum} `
            curRow++
            curRowNums = 1
        }

        curNum++
    }

    console.log(result);
}
numberPyramid(["100"])