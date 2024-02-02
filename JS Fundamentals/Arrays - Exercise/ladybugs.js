function ladybugs(input) {
  let fieldSize = input.shift();
  let ladybugs = input.shift().split(" ").map(Number);
  let field = new Array(fieldSize).fill(0);

  for (let index of ladybugs) {

    if (field[index] != undefined) {
      field[index] = 1;
    }
  }

  for (let moving of input) {
    let action = moving.split(" ");
    let ladybug = Number(action[0]);

    if (field[ladybug] === 1) {
      let curIndex = ladybug;
      let direction = action[1];
      let distance = Number(action[2]);

      if (direction === "left") {
        distance *= -1;
      }

      while (curIndex >= 0 && curIndex < fieldSize && field[curIndex] === 1) {
        if (distance === 0) {
          break;
        }

        curIndex += distance;
      }

      field[ladybug] = 0;

      if (curIndex >= 0 && curIndex < fieldSize) {
        field[curIndex] = 1;
      }
    }
  }
  console.log(field.join(" "));
}

ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([5, "3", "3 left 2", "1 left -2"]);
