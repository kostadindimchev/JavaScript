function extractIncreasingSubsequenceFromArray(array) {
    let curBiggest = array.shift()
    let result = [curBiggest];
    for (let num of array) {
        if(num >= curBiggest){
            result.push(num)
            curBiggest = num;
        }
    }
    return result
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);