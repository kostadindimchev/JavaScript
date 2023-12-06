function clock() {
    for(hour = 0; hour < 24; hour++) {
        for(min = 0; min < 60; min++) {
            console.log(`${hour}:${min}`);
        }
    }

}
clock()