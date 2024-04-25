function ticTacToe(array) {
  let firstPlayer = "X";
  let secondPlayer = "O";
  let curPlayer = firstPlayer;

  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  while (array.length > 0) {
    let turn = array.shift();
    let coordinates = turn.split(" ");

    if (
      dashboard[coordinates[0]][coordinates[1]] === "X" ||
      dashboard[coordinates[0]][coordinates[1]] === "O"
    ) {
      console.log("This place is already taken. Please choose another!");
      continue;
    } else {
      if (curPlayer === firstPlayer) {
        dashboard[coordinates[0]][coordinates[1]] = "X";
        curPlayer = secondPlayer;
      } else {
        dashboard[coordinates[0]][coordinates[1]] = "O";
        curPlayer = firstPlayer;
      }
    }

    for (let i = 0; i <= 1; i++) {
      let player = "X";
      if (i === 1) {
        player = "O";
      }
      if (
        (dashboard[0][0] === player && dashboard[1][1] === player && dashboard[2][2] === player) ||
        (dashboard[0][2] === player && dashboard[1][1] === player && dashboard[2][0] === player) ||
        (dashboard[0][0] === player && dashboard[1][0] === player && dashboard[2][0] === player) ||
        (dashboard[0][1] === player && dashboard[1][1] === player && dashboard[2][1] === player) ||
        (dashboard[0][2] === player && dashboard[1][2] === player && dashboard[2][2] === player) ||
        (dashboard[0][0] === player && dashboard[0][1] === player && dashboard[0][2] === player) ||
        (dashboard[1][0] === player && dashboard[1][1] === player && dashboard[1][2] === player) ||
        (dashboard[2][0] === player && dashboard[2][1] === player && dashboard[2][2] === player)
      ) {
        console.log(`Player ${player} wins!`);
        return print();
      } else if (
        !dashboard[0].includes(false) &&
        !dashboard[1].includes(false) &&
        !dashboard[2].includes(false)
      ) {
        console.log("The game ended! Nobody wins :(");
        return print();
      }
    }
  }
  function print() {
    console.log(dashboard[0].join("\t"));
    console.log(dashboard[1].join("\t"));
    console.log(dashboard[2].join("\t"));
  }
}

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
