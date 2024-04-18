function diagonalAttack(array) {
    let matrix = [];
    while(array.length){
        matrix.push(array.shift().split(' ').map(Number))
    }
    
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for(let i = 0; i < matrix.length; i++){
        mainDiagonal += matrix[i][i]
        secondaryDiagonal += matrix[i][matrix.length - 1 - i]
    }

    if(mainDiagonal === secondaryDiagonal){

        for(let i = 0; i < matrix.length; i++){
           
            for (let j = 0; j < matrix.length; j++) {
                if((j !== i) && (j !== matrix.length - 1 - i)){
                    matrix[i][j] = mainDiagonal
                }
            }
        }
    }
    console.log(matrix.join('\n').split(',').join(' '));
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);