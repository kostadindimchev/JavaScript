function nameGame(input) {
  index = 0;
  let command = input[index];
  let winner = "";
  let winnerPoints = 0;

  while (command !== "Stop") {
    let name = command;
    let totalPoints = 0;

    for (let i = 0; i < name.length; i++) {
      index++;
      let num = Number(input[index]);

      let char = name[i];
      let ascii = char.charCodeAt(0);

      if (num === ascii) {
        totalPoints += 10;
      } else {
        totalPoints += 2;
      }
    }

    if (totalPoints >= winnerPoints) {
      winner = name;
      winnerPoints = totalPoints;
    }

    index++;
    command = input[index];
  }

  console.log(`The winner is ${winner} with ${winnerPoints} points!`);
}
nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
