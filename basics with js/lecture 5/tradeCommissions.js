function tradeCommissions(input) {
    let city = input[0];
    let sells = Number(input[1]);
    let commission = 0;

    if(sells >= 0 && sells <= 500) {

        switch(city) {
            case "Sofia":
                commission = 0.05 * sells;
                console.log(commission.toFixed(2));
                break;

            case "Varna":
                commission = 0.045 * sells;
                console.log(commission.toFixed(2));
                break;

            case "Plovdiv":
                commission = 0.055 * sells;
                console.log(commission.toFixed(2));
                break;

            default:
                console.log("error");
        }

    }else if(sells > 500 && sells <= 1000) {

        switch(city) {
            case "Sofia":
                commission = 0.07 * sells;
                console.log(commission.toFixed(2));
                break;

            case "Varna":
                commission = 0.075 * sells;
                console.log(commission.toFixed(2));
                break;

            case "Plovdiv":
                commission = 0.08 * sells;
                console.log(commission.toFixed(2));
                break;

            default:
                console.log("error");
        }

    }else if(sells > 1000 && sells <=10000) {

        switch(city) {
            case "Sofia":
                commission = 0.08 * sells;
                console.log(commission.toFixed(2));
                break;

            case "Varna":
                commission = 0.1 * sells;
                console.log(commission.toFixed(2));
                break;

            case "Plovdiv":
                commission = 0.12 * sells;
                console.log(commission.toFixed(2));
                break;

            default:
                console.log("error");
        }

    }else if(sells > 10000) {

        switch(city) {
            case "Sofia":
                commission = 0.12 * sells;
                console.log(commission.toFixed(2));
                break;

            case "Varna":
                commission = 0.13 * sells;
                console.log(commission.toFixed(2));
                break;

            case "Plovdiv":
                commission = 0.145 * sells;
                console.log(commission.toFixed(2));
                break;

            default:
                console.log("error");
        }

    }else{
        console.log("error");
    }

}

tradeCommissions(["Kaspichan", "-50"])