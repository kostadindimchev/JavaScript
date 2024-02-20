function arrayModifier(input) {
  let nums = input.shift().split(' ').map(Number);

  while(input[0] !== 'end') {
    let tokens = input.shift().split(' ')
    let command = tokens[0];
    let indexOne = Number(tokens[1]);
    let indexTwo = Number(tokens[2]);

    if(command === 'swap') {
      let temp = nums[indexOne];
      nums[indexOne] = nums[indexTwo];
      nums[indexTwo] = temp
    }else if(command === 'multiply') {
      nums[indexOne] *= nums[indexTwo]
    }else if(command === 'decrease') {
      nums = nums.map(x => x - 1)
    }

  }
  console.log(nums.join(', '));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
