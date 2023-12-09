function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;

  let standard = 0;
  let kid = 0;
  let student = 0;

  while (command !== "Finish") {
    let filmName = command;

    let freePlaces = Number(input[index]);
    index++;

    let command1 = input[index];
    index++;

    takenPlaces = 0;

    while (command1 !== "End") {
      let ticketType = command1;

      if (ticketType === "standard") {
        standard++;
      } else if (ticketType === "kid") {
        kid++;
      } else if (ticketType === "student") {
        student++;
      }

      takenPlaces++;
      if (takenPlaces === freePlaces) {
        break;
      }

      command1 = input[index];
      index++;
    }

    console.log(
      `${filmName} - ${((takenPlaces / freePlaces) * 100).toFixed(2)}% full.`
    );

    command = input[index];
    index++;
  }

  let totalTickets = standard + kid + student;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((student / totalTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "The Matrix",

  "20",

  "student",

  "standard",

  "kid",

  "kid",

  "student",

  "student",

  "standard",

  "student",

  "End",

  "The Green Mile",

  "17",

  "student",

  "standard",

  "standard",

  "student",

  "standard",

  "student",

  "End",

  "Amadeus",

  "3",

  "standard",

  "standard",

  "standard",

  "Finish",
]);
