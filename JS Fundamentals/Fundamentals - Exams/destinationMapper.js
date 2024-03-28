function destinationMapper(input) {
    let arr = [];
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gm
    let match = pattern.exec(input);

    while(match !== null) {
        let destination = match.groups.destination;
        arr.push(destination);

        match = pattern.exec(input);
    }

    let travelPoints = 0
    for (let el of arr) {
        travelPoints += el.length
    }

    console.log(`Destinations: ${arr.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");