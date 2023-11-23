function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);
    let price = 0;

    if (city === "Sofia") {
        switch (product) {
            case 'coffee':
                price = qty * 0.50;
                console.log(price);
                break;
            case 'water':
                price = qty * 0.80;
                console.log(price);
                break;
            case 'beer':
                price = qty * 1.20;
                console.log(price);
                break;
            case 'sweets':
                price = qty * 1.45;
                console.log(price);
                break;
            case 'peanuts':
                price = qty * 1.60;
                console.log(price);
                break;
        }
    }

        if (city === "Plovdiv") {
            switch (product) {
                case "coffee":
                    price = qty * 0.40;
                    console.log(price);
                    break;
                case 'water':
                    price = qty * 0.70;
                    console.log(price);
                    break;
                case 'beer':
                    price = qty * 1.15;
                    console.log(price);
                    break;
                case 'sweets':
                    price = qty * 1.30;
                    console.log(price);
                    break;
                case 'peanuts':
                    price = qty * 1.50;
                    console.log(price);
                    break;
            }
        }

        if (city === "Varna") {
            switch (product) {
                case 'coffee':
                    price = qty * 0.45;
                    console.log(price);
                    break;
                case 'water':
                    price = qty * 0.70;
                    console.log(price);
                    break;
                case 'beer':
                    price = qty * 1.10;
                    console.log(price);
                    break;
                case 'sweets':
                    price = qty * 1.35;
                    console.log(price);
                    break;
                case 'peanuts':
                    price = qty * 1.55;
                    console.log(price);
                    break;
            }
        }
    }

smallShop(["coffee",

"Varna",

"2"])