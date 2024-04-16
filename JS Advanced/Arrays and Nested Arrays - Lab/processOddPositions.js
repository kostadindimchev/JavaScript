function processOddPositions(array) {
    let newArr = [];
    for(let i = 1; i < array.length; i += 2){
        let num = array[i];
        newArr.push(num)
    }
    newArr = newArr.map(x => x * 2).reverse();
    
    return newArr
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);