function spiralMatrix(x, y) {
  let matrix = new Array(x).fill([]).map(() => new Array(y));
  let count = 1;
  let maxCount = x * y;
  let maxRow = Number(x - 1);
  let maxCol = Number(y - 1);
  let minRow = 0;
  let minCol = 0;

  while (count <= maxCount) {
    for (let i = minCol; i <= maxCol && count <= maxCount; i++) {
      matrix[minRow][i] = count;
      count++;
    }
    minRow++;

    for (let i = minRow; i <= maxRow && count <= maxCount; i++) {
      matrix[i][maxCol] = count;
      count++;
    }
    maxCol--;

    for (let i = maxCol; i >= minCol && count <= maxCount; i--) {
      matrix[maxRow][i] = count;
      count++;
    }
    maxRow--;

    for (let i = maxRow; i >= minRow && count <= maxCount; i--) {
      matrix[i][minCol] = count;
      count++;
    }
    minCol++;
  }
  console.log(matrix.join("\n").split(",").join(" "));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);
