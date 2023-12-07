function multiplicationTable() {
    for(first = 1; first <= 10; first++) {
        for(second = 1; second <= 10; second++) {
            console.log(`${first} * ${second} = ${first * second}`);
        }
    }
}
multiplicationTable()