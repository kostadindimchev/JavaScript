function jansNotation(array) {
  let nums = [];
  let isValid = true;

  for (let el of array) {
    if (typeof el === "number") {
      nums.push(el);
    } else {
      if (nums.length < 2) {
        console.log("Error: not enough operands!");
        isValid = false;
        break;
      }

      let numTwo = nums.pop();
      let numOne = nums.pop();
      let result = 0;

      if (el === "+") {
        result = numOne + numTwo;
      } else if (el === "-") {
        result = numOne - numTwo;
      } else if (el === "*") {
        result = numOne * numTwo;
      } else if (el === "/") {
        result = numOne / numTwo;
      }

      nums.push(result);
    }
  }
  if (nums.length > 1) {
    console.log("Error: too many operands!");
  } else if (isValid) {
    console.log(nums[0]);
  }
}

jansNotation([3, 4, "+"]);
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
jansNotation([15, "/"]);
jansNotation([31, 2, "+", 11, "/"]);
