function equalNeighbors(array) {
    let pairsFound = 0;
    let count = Number(array.length);
    let arrLength = Number(array[0].length);

    for(let i = 0; i < count; i++){
        for(let j = 0; j < arrLength; j++){
            if(i < count - 1){
                if(array[i][j] === array[i + 1][j]){
                    pairsFound++;
                }
                if(array[i][j] === array[i][j + 1]){
                    pairsFound++;
                }
            }else{
                if(array[i][j] === array[i][j + 1]){
                    pairsFound++;
                }
            }
        }
    }
    console.log(pairsFound);
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);

equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]])