function piccolo(input) {
    let result = new Set();

    for (let car of input) {
        let [direction, carNumber] = car.split(', ');
        if(direction === 'IN') {
            result.add(carNumber);
        }else{
            result.delete(carNumber)
        }
    }

    if(result.size === 0) {
        console.log('Parking Lot is Empty');
    }else{
        sorted = Array.from(result)
        .sort()
        .forEach(x => console.log(x));
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);