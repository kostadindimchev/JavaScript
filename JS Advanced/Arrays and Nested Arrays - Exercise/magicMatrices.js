function magicMatrices(matrix) {
    let n = Number(matrix.length);
    let isMagic = true;
    let firstSum = matrix[0].reduce((x, y) => x + y)

    for(let i = 0; i < n; i++){
        let rowSum = matrix[i].reduce((x, y) => x + y);
        let colSum = 0;
        for(let j = 0; j < n; j++){
        colSum += Number(matrix[j][i]);
        }
        if((rowSum !== firstSum) || (colSum !== firstSum)){
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}

magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]]);
magicMatrices([[11, 32, 45],
               [21, 0, 1],
               [21, 1, 1]]);
magicMatrices([[1, 0, 0],
               [0, 0, 1],
               [0, 1, 0]]);