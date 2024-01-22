function spiceMustFlow(yield) {
  let dayCounter = 0;
  let storage = 0;

  while (yield >= 100) {
    dayCounter++;
    storage += yield;
    storage -= 26;
    yield -= 10;
  }
  console.log(dayCounter);
  if (storage >= 26) {
    storage -= 26;
  }
  console.log(storage);
}

spiceMustFlow(111);
spiceMustFlow(450);
