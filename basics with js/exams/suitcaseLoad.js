function suitcaseLoad(input) {
    let index = 0
    let capacity = Number(input[index]);
    index++

    let command = input[index];
    let counter = 0

    while(command !== "End") {
        let suitcase = Number(command);
        counter++

        if(counter % 3 === 0) {
            suitcase += 0.10 * suitcase
        }

        capacity -= suitcase
        if(capacity < 0) {
            console.log("No more space!");
            counter--
            break;
        }

        index++
        command = input[index]
    }

    if(capacity >= 0) {
        console.log("Congratulations! All suitcases are loaded!");
    }

    console.log(`Statistic: ${counter} suitcases loaded.`);

}
suitcaseLoad(["700.5",
"180",
"340.6",
"126",
"220"])

