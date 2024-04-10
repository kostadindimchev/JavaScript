function timeToWalk(steps, footprint, speedKmH) {
    let distanceInKm = steps * footprint / 1000;
    let rest = Math.floor(distanceInKm / 0.5);
    let speed = (distanceInKm / speedKmH) * 60;
    let timeInMins = speed + rest;

    let hours = Math.floor(timeInMins / 60);
    let mins = Math.floor(timeInMins);
    let secs = Math.round(timeInMins * 60) % 60;

    console.log(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);