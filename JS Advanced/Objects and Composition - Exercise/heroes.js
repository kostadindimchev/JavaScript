function solve() {
  return {
    fighter(hero) {
      let heroe = {
        name: hero,
        health: 100,
        stamina: 100,
      };

      heroe.fight = () => {
        console.log(`${heroe.name} slashes at the foe!`);
        heroe.stamina--;
      };

      return heroe;
    },

    mage(hero) {
      let heroe = {
        name: hero,
        health: 100,
        mana: 100,
      };

      heroe.cast = (spell) => {
        console.log(`${heroe.name} cast ${spell}`);
        heroe.mana--;
      };

      return heroe;
    },
  };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
