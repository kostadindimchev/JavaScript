function travelTime(input) {
    let result = {};

    for (let line of input) {
        let [country, city, cost] = line.split(' > ')
        cost = Number(cost)

        if(!result.hasOwnProperty(country)) {
            result[country] = new Map()
        }
        
        if(cost > result[country].get(city)) {
            continue;
        }

        result[country].set(city, cost)
    }  

    Object
    .keys(result)
    .sort((a,b) => a.localeCompare(b))
    .forEach(country => {
        let cities = Array.from(result[country])
        .sort((a,b) => a[1] - b[1])
        .map(el => el.join(' -> '));
        console.log(`${country} -> ${cities.join(' ')}`);
    })
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);