function needForSpeed(input) {
    let n = input.shift();
    let cars = {};

    for(let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        cars[car] = [+mileage, +fuel];
    }

    while(input[0] !== 'Stop') {
        let tokens = input.shift().split(' : ');

        if(tokens[0] === 'Drive'){
            let car = tokens[1];
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);

            if(cars[car][1] < fuel) {
                console.log("Not enough fuel to make that ride");
            }else{
            cars[car][1] -= fuel
            cars[car][0] += distance
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if(cars[car][0] >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }

        }else if(tokens[0] === 'Refuel'){
            let car = tokens[1];
            let fuel = Number(tokens[2]);

            if(cars[car][1] + fuel <= 75){
                cars[car][1] += fuel
            }else{
                fuel = 75 - cars[car][1]
                cars[car][1] = 75
            }
            console.log(`${car} refueled with ${fuel} liters`);

        }else if(tokens[0] === 'Revert'){
            let car = tokens[1];
            let kilometers = Number(tokens[2]);

            cars[car][0] -= kilometers

            if(cars[car][0] < 10000){
                cars[car][0] = 10000
            }else{
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    Object
        .entries(cars)
        .forEach(car => 
            console.log(`${car[0]} -> Mileage: ${car[1][0]} kms, Fuel in the tank: ${car[1][1]} lt.`));
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);