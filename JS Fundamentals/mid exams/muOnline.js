function muOnline(input) {
  let health = 100;
  let bitcoins = 0;
  let rooms = input.split("|");
  let curRoom = 0;
  let isCompleted = true;

  while (Number(rooms.length) > 0) {
    let tokens = rooms.shift().split(" ");
    let command = tokens[0];
    let num = Number(tokens[1]);
    curRoom++;

    if (command === "potion") {
      let healed = 0;

      if (health + num > 100) {
        healed = 100 - health;
        health = 100;
      } else {
        healed = num;
        health += num;
      }
      console.log(`You healed for ${healed} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      console.log(`You found ${num} bitcoins.`);
      bitcoins += num;
    } else {
      health -= num;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${curRoom}`);
        isCompleted = false;
        break;
      }
    }
  }
  if (isCompleted) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
