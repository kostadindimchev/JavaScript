function bombNumber(sequence, bomb) {
  let bombNum = bomb[0];
  let radius = bomb[1];
  while (sequence.includes(bombNum)) {
    let start = sequence.indexOf(bombNum);
    let distance = radius * 2 + 1;
    sequence.splice(Math.max(start - radius, 0), distance);
    sequence.includes(bombNum);
  }

  let sum = 0;
  for (let element of sequence) {
    sum += Number(element);
  }
  
  console.log(sum);
}

bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumber([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumber([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
