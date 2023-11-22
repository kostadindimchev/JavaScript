function projectsCreaton(input) {
    let name = (input[0])
    let count = (input[1])
    let hours = (input[1]) * 3

    console.log(`The architect ${name} will need ${hours} hours to complete ${count} project/s.`);
}
projectsCreaton(["George", 5])
