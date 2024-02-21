function bonusScoringSystem(input) {
  let students = Number(input.shift());
  let lectures = Number(input.shift());
  let additionalBonus = Number(input.shift());
  let maxBonus = 0;
  let attendances = 0;

  for (let student = 1; student <= students; student++) {
    let curAttendances = Number(input.shift());
    let curBonus = (curAttendances / lectures) * (5 + additionalBonus);

    if (curBonus > maxBonus) {
      maxBonus = curBonus;
      attendances = curAttendances;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${attendances} lectures.`);
}

bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
