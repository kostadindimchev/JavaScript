function convertToJson(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }

    let json = JSON.stringify(obj)

    console.log(json);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith','Blond');