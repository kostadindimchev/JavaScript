function carFactory(car) {
    let result = {
        model: '',
        engine: {},
        carriage: {},
        wheels: [],
    }
    result.wheels.length = 4;

    result.model = car.model;

    if(car.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800;
    }else if(car.power <= 120) {
        result.engine.power = 120;
        result.engine.volume = 2400;
    }else if(car.power <= 200) {
        result.engine.power = 200;
        result.engine.volume = 3500;
    }

    result.carriage.type = car.carriage;
    result.carriage.color = car.color;

    if(car.wheelsize % 2 === 0) {
        result.wheels = result.wheels.fill(car.wheelsize - 1)
    }else{
        result.wheels = result.wheels.fill(car.wheelsize)
    }

    return result;
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });