function roadRadar(speed, area) {
    let speedLimit = 0;
    if(area === 'motorway'){
        speedLimit = 130;
    }else if(area === 'interstate'){
        speedLimit = 90;
    }else if(area === 'city'){
        speedLimit = 50;
    }else if(area === 'residential'){
        speedLimit = 20;
    }

    if(speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        let difference = speed - speedLimit;
        let stat = '';
        if(difference <= 20){
            stat = 'speeding'
        }else if(difference <= 40){
            stat = 'excessive speeding'
        }else{
            stat = 'reckless driving'
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${stat}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');