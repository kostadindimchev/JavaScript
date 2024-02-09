function arrayManipulations(input) {
  let workingArr = input.shift().split(" ").map(Number);

  for (let commands of input) {
    let command = commands.split(" ");
    let operation = command[0];

    switch (operation) {
      case "Add":
        workingArr.push(Number(command[1]));
        break;
      case "Remove":
        let isIncl = workingArr.includes(Number(command[1]));
        while (isIncl) {
          workingArr.splice(workingArr.indexOf(Number(command[1])), 1);
          isIncl = workingArr.includes(Number(command[1]));
        }
        break;
      case "RemoveAt":
        workingArr.splice(Number(command[1]), 1);
        break;
      case "Insert":
        workingArr.splice(Number(command[2]), 0, Number(command[1]));
        break;
    }
  }

  console.log(workingArr.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
