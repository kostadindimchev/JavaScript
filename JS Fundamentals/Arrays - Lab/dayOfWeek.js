function dayOfWeek(day) {
  if (day > 7 || day < 1) {
    console.log("Invalid day!");
  } else {
    let week = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let currentDay = week[day - 1];
    console.log(currentDay);
  }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
