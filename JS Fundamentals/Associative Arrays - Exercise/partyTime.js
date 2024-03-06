function partyTime(input = []) {
  let vip = [];
  let regular = [];

  while (input[0] !== "PARTY") {
    let guest = input.shift();

    if (Number.isNaN(Number(guest[0]))) {
      regular.push(guest);
    } else {
      vip.push(guest);
    }
  }

  for (let guest of input) {
    if (vip.includes(guest)) {
      let indexOfGuest = vip.indexOf(guest);
      vip.splice(indexOfGuest, 1);
    } else if (regular.includes(guest)) {
      let indexOfGuest = regular.indexOf(guest);
      regular.splice(indexOfGuest, 1);
    }
  }

  console.log(Number(vip.length) + Number(regular.length));
  vip.forEach((guest) => console.log(guest));
  regular.forEach((guest) => console.log(guest));
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
