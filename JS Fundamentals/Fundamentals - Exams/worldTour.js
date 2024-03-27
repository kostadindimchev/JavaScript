function worldTour(input) {
    let stops = input.shift();

    while(input[0] !== 'Travel') {
        let [command, token1, token2] = input.shift().split(':');
        
        if(command === 'Add Stop') {
            let num = Number(token1)
            if(num < +stops.length && num >= 0){
                let left = stops.slice(0, num);
                let rigth = stops.slice(num);
                stops = left + token2 + rigth;
            }
                console.log(stops);

        }else if(command === 'Remove Stop') {
            let start = Number(token1);
            let end = Number(token2);
            if(start < +stops.length && start >= 0 && end >= 0 && end < +stops.length) {
                let left = stops.slice(0, start);
                let rigth = stops.slice(end + 1);
                stops = left + rigth
            }
                console.log(stops);

        }else if(command === 'Switch') {
            stops = stops.split(token1).join(token2);
            console.log(stops);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]);