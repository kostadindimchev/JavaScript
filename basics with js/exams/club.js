function club(input) {
    let index = 0;
    let target = Number(input[index]);
    index++

    let command = input[index];
    let income = 0

    while(command !== 'Party!') {
        let coctail = command;
        index++
        let count = input[index];
        index++

        let service = coctail.length * count

        if(service % 2 !== 0){
            service = 0.75 * service
        }

        income += service 

        if(income >= target) {
            console.log("Target acquired.");
            break;
        }

        command = input[index]
    }

    if(income < target) {
        console.log(`We need ${(target - income).toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${income.toFixed(2)} leva.`);

}club
(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])

