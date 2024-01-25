function equalArrays(arrOne, arrTwo) {
  let isEqual = true;
  let sum = 0;
  let longer = [];

  if (arrOne.length >= arrTwo.length) {
    longer = arrOne;
  } else {
    longer = arrTwo;
  }

  for (let i = 0; i < longer.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      isEqual = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    } else {
      sum += Number(arrOne[i]);
    }
  }

  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
