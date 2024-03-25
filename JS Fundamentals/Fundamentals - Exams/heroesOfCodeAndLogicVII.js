function heroesOfCodeAndLogicVII(input) {
    let heroes = {};
    let numberOfHeroes = +input.shift();

   for(let i = 0; i < numberOfHeroes; i++) {
    let tokens = input.shift().split(' ');
    let hero = tokens[0];
    let hp = +tokens[1];
    let mp = +tokens[2];

    heroes[hero] = {
        hp,
        mp,
    }
    }

    while(input[0] !== 'End') {
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let hero = tokens[1];
        let p1 = +tokens[2];
        let p2 = tokens[3];

        let name = heroes[hero]
        
        if(command === 'CastSpell'){
            if(name.mp >= p1) {
                name.mp -= p1
                console.log(`${hero} has successfully cast ${p2} and now has ${name.mp} MP!`);
            }else{
                console.log(`${hero} does not have enough MP to cast ${p2}!`);
            }

        }else if(command === 'TakeDamage'){
            name.hp -= p1
            if(name.hp > 0) {
                console.log(`${hero} was hit for ${p1} HP by ${p2} and now has ${name.hp} HP left!`);
            }else{
                delete heroes[hero];
                console.log(`${hero} has been killed by ${p2}!`);
            }
            
        }else if(command === 'Recharge'){
            let recharged = Math.min(p1, 200 - name.mp);
            name.mp += +recharged;
            console.log(`${hero} recharged for ${recharged} MP!`);

        }else if(command === 'Heal'){
            let healed = Math.min(p1, 100 - name.hp);
            name.hp += +healed;
            console.log(`${hero} healed for ${healed} HP!`);
        }
    }

    for (let hero of Object.entries(heroes)) {
        let name = hero[0];
        let data = hero[1]
        console.log(name);
        console.log(`  HP: ${data.hp}`);
        console.log(`  MP: ${data.mp}`);
    }
}

heroesOfCodeAndLogicVII([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);

heroesOfCodeAndLogicVII([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);