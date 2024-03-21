function starEnigma(input) {
    let messages = +input.shift();

    let attacked = [];
    let destroyed = [];

    for(let i = 0; i < messages; i++){
        let encrypted = input[i];
        let chars = encrypted.split('');
        let counter = 0;
        for (let char of chars) {
            if(char.toLocaleLowerCase() === 's' ||
            char.toLocaleLowerCase() === 't' ||
            char.toLocaleLowerCase() === 'a' ||
            char.toLocaleLowerCase() === 'r') {
                counter++
            }
        }
        let decrypted = chars.map(char => String.fromCharCode(char.charCodeAt() - counter)).join('');

        let pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attack>A|D)![^@\-!:>]*->(?<soldiers>\d+)/g
        let result = pattern.exec(decrypted)

        if(result) {
            let planet = result.groups.planet;
            let attackType = result.groups.attack;

            if(attackType === 'A') {
                attacked.push(planet)
            }else{
                destroyed.push(planet)
            }
        }
    }

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.sort((a, b) => a.localeCompare(b))
    .forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.sort((a, b) => a.localeCompare(b))
    .forEach(planet => console.log(`-> ${planet}`));
}

starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']);