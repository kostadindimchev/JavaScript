function pirates(input) {
    let cities = {};

    while(input[0] !== 'Sail') {
        let [city, population, gold] = input.shift().split('||');
        if(!cities.hasOwnProperty(city)) {
            cities[city] = [+population, +gold];
        }else{
            cities[city][0] += +population;
            cities[city][1] += +gold;
        }
    }
    
    while(input[0] !== 'End') {
        let [command, city, token3, token4] = input.shift().split('=>');

        if(command === 'Plunder') {
            console.log(`${city} plundered! ${token4} gold stolen, ${token3} citizens killed.`);

            cities[city][0] -= +token3;
            cities[city][1] -= +token4;

            if(cities[city][0] === 0 || cities[city][1] === 0) {
                delete cities[city]
                console.log(`${city} has been wiped off the map!`);
            }
        }else if(command === 'Prosper') {
            if(+token3 < 0){
                console.log("Gold added cannot be a negative number!");
            }else{
                cities[city][1] += +token3;
                console.log(`${token3} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`);
            }
        }
    }

    if(Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        Object
        .entries(cities)
        .forEach((cities) => console.log(`${cities[0]} -> Population: ${cities[1][0]} citizens, Gold: ${cities[1][1]} kg`));
    }else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);