function listOfNames(array) {
    let count = 1;
    array
    .sort((a, b) => a.localeCompare(b))
    .forEach(x => console.log(`${count++}.${x}`))
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
