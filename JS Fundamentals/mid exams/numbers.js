function numbers(input) {
  let array = input.split(" ").map(Number);
  let arrSum = 0;
  let newArr = [];

  for (const el of array) {
    arrSum += Number(el);
  }
  let avg = arrSum / array.length;

  for (el of array) {
    if (el > avg) {
      newArr.push(el);
    }
  }

  newArr = newArr.sort((a, b) => b - a).splice(0, 5);
  if (newArr.length > 0) {
    console.log(newArr.join(" "));
  } else {
    console.log("No");
  }
}

numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
