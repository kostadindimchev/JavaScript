function mergeArrays(arrOne, arrTwo) {
  let arrThree = [];
  let newNum = 0;
  let newStr = "";

  for (let i = 0; i < arrOne.length; i++) {
    if (i % 2 === 0) {
      newNum = Number(arrOne[i]) + Number(arrTwo[i]);
      arrThree.push(newNum);
    } else {
      newStr = `${arrOne[i]}${arrTwo[i]}`;
      arrThree.push(newStr);
    }
  }
  console.log(arrThree.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
