function dungeonestDark(input) {
  let health = 100;
  let coins = 0;
  let isCompleted = true;
  let rooms = input[0].split("|");

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(" ");

    if (room[0] === "potion") {
      let healing = Number(room[1]);
      if (health + healing > 100) {
        healing = 100 - health;
        health += healing;
      } else {
        health += healing;
      }
      console.log(`You healed for ${healing} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (room[0] === "chest") {
      let coinsFound = Number(room[1]);
      coins += coinsFound;
      console.log(`You found ${coinsFound} coins.`);
    } else {
      let monster = room[0];
      health -= Number(room[1]);
      if (health <= 0) {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${i + 1}`);
        isCompleted = false;
        break;
      } else {
        console.log(`You slayed ${monster}.`);
      }
    }
  }
  if (isCompleted) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
