function diagonalSums(array) {
    let count = Number(array.length);

    let j = count - 1;
    let mainDiagonal = 0;
    let secondaryDiagonal = 0
    for(let i = 0; i < count; i++, j--){
        mainDiagonal += array[i][i] 
        secondaryDiagonal += array[j][i]
    }
    console.log(mainDiagonal + ' ' + secondaryDiagonal);
}

diagonalSums([[20, 40],[10, 60]]);
diagonalSums([[3, 5, 17],[-1, 7, 14],[1, -8, 89]]);