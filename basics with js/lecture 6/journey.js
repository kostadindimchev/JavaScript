function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let spend = 0
    let destinaton = '';
    let type = '';

    if(budget <= 100) {
        destinaton = 'Bulgaria'
        switch(season) {
        case 'summer':
        spend = budget * 0.3
        type = 'Camp'
        break;
        case 'winter':
        spend = budget * 0.7
        type = 'Hotel'
        break;
        }
    }else if(budget <= 1000) {
        destinaton = 'Balkans'
        switch(season) {
            case 'summer':
            spend = budget * 0.4
            type = 'Camp'
            break;
            case 'winter':
            spend = budget * 0.8
            type = 'Hotel'
            break;
            }
    }else if(budget > 1000) {
        destinaton = 'Europe'
        spend = budget * 0.9
        type = 'Hotel'
    }

    console.log(`Somewhere in ${destinaton}`);
    console.log(`${type} - ${spend.toFixed(2)}`);
}

journey(["1500", "summer"])