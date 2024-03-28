function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');

        plants[plant] = [Number(rarity), []];
    }

    while(input[0] !== 'Exhibition') {
    let tokens = input.shift().split(' ');
    
    let command = tokens.shift();
    if(command === 'Rate:'){
        let plant = tokens.shift();
        let rating = Number(tokens.pop());

        if(plants.hasOwnProperty(plant)) {
        
        plants[plant][1].push(rating);
        }else{
            console.log('error');
        }

    }else if(command === 'Update:'){
        let plant = tokens.shift();
        let newRarity = Number(tokens.pop());

        if(plants.hasOwnProperty(plant)) {
            plants[plant][0] = newRarity;
            }else{
                console.log('error');
            }

    }else if(command === 'Reset:'){
        let plant = tokens.shift();

        if(plants.hasOwnProperty(plant)) {
            plants[plant][1] = []
            }else{
                console.log('error');
            }
    }
    }

    console.log('Plants for the exhibition:');
    Object
        .entries(plants)
        .forEach((plant) => 
        console.log(`- ${plant[0]}; Rarity: ${plant[1][0]}; Rating: ${plant[1][1].length === 0 ? '0.00' :
        (plant[1][1].reduce((x, y) => x + y) / (plant[1][1].length)).toFixed(2)}`));

}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
;