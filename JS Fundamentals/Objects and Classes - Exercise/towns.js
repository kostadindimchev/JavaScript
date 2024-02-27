function towns(array) {
    let townsList = {};

    for (let table of array) {
        let tokens = table.split(' | ');
        townsList.town = tokens[0];
        townsList.latitude = Number(tokens[1]).toFixed(2);
        townsList.longitude = Number(tokens[2]).toFixed(2);
        console.log(townsList);
    }   
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);