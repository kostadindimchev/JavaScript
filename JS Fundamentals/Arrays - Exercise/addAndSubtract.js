function addAndSubtract(arr) {
  let newArr = [];
  let oldSum = 0;
  let newSum = 0;

  for (let i = 0; i < arr.length; i++) {
    oldSum += Number(arr[i]);

    if (arr[i] % 2 === 0) {
      let newNum = Number(arr[i] + i);
      newArr.push(newNum);
      newSum += newNum;
    } else {
      let newNum = Number(arr[i] - i);
      newArr.push(newNum);
      newSum += newNum;
    }
  }
  console.log(newArr);
  console.log(oldSum);
  console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
