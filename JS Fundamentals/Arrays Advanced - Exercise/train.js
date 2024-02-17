function train(input) {
  let wagons = input.shift().split(" ").map(Number);
  let maxCapacity = input.shift();

  for (let element of input) {
    let curElement = element.split(" ");
    if (curElement[0] === "Add") {
      wagons.push(curElement[1]);
    } else {
        for (let i = 0; i < wagons.length; i++) {
            if(Number(curElement[0]) + wagons[i] <= maxCapacity) {
                wagons[i] += Number(curElement[0])
                break;
            }
        }
    }
  }
  console.log(wagons.join(' '));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
