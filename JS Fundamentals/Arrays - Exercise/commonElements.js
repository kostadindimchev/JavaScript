function commonElements(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i] === arrTwo[j]) {
        console.log(arrOne[i]);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
