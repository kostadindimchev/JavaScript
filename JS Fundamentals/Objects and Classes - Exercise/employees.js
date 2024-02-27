function employees(array) {
    let employees = {}

    for (let employee of array) {
        employees.name = employee;
        employees.personalNumber = Number(employee.length);
        console.log(
        `Name: ${employees.name} -- Personal Number: ${employees.personalNumber}`
        );
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);