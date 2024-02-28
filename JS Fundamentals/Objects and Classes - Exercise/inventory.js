function inventory(array) {
    let heroes = [];

    for (let hero of array) {
        let newHero = {}
        let tokens = hero.split(' / ');
        newHero.name = tokens[0];
        newHero.level = Number(tokens[1]);
        newHero.items = tokens[2];
        heroes.push(newHero)
    }
    let sorted = heroes.sort((a, b) => a.level - b.level)
    for (let hero of sorted) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);     
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);