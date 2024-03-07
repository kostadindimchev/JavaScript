function companyUsers(input) {
    let result = {};

    for (let line of input) {
        let [company, id] = line.split(' -> ');

        if(!result.hasOwnProperty(company)) {
            result[company] = new Set();
        }

        result[company].add(id);
    }

    let sorted = Object.entries(result)
    .sort((a,b) => a[0].localeCompare(b[0]))

    for (let el of sorted) {
        console.log(el[0]);
        for (let id of el[1]) {
            console.log('--', id);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);