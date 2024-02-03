function maxNumber(arr) {
  let newArr = [];

  for (i = 0; i <= arr.length; i++) {
    let isBigger = true;
    for (j = i + 1; j <= arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
