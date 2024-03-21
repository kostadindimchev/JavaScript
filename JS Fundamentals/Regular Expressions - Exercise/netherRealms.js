function netherRealms(input) {
    input = input
    .split(/[, ]+/g)
    .sort((a, b) => a.localeCompare(b))

    for (let demon of input) {

        demon = demon.trim();

        let health = demon.match(/[^0-9+\-*\/.]/g).join('');
        if(health !== null) {
        health = health
        .split('')
        .map(c => c.charCodeAt(0))
        .reduce((a, b) => a + b)
        }

        let attack = demon.match(/([-]?\d+(?:[.]\d+)*)/g);
        if(attack !== null) {
        attack = attack
        .map(Number)
        .reduce((a, b) => a + b)
        }else{
            attack = 0
        }
        
        let multiplier = demon.match(/[*\/]/g);
        if(multiplier !== null) {
            for (let el of multiplier) {
                if(el === '*'){
                    attack *= 2
                }else{
                    attack /= 2
             }
            }
        }
    console.log(`${demon} - ${health} health, ${attack.toFixed(2)} damage`);    
    } 
}

netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');