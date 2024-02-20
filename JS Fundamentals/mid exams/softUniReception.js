function softUniReception(input) {
  input = input.map(Number);
  let studentsCount = input.pop();
  let [e1, e2, e3] = input;
  let efficiency = e1 + e2 + e3;
  let hours = 0;

  while (studentsCount > 0) {
    hours++;
    if (hours % 4 !== 0) {
      studentsCount -= efficiency;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}

softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
