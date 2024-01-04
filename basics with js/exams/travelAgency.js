function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let price = 0
    let discount = 0
    let finalPrice = 0
    let isInvalid = false

    switch(city){

        case 'Bansko':
        case 'Borovets':
            if(package === 'withEquipment') {
                price = 100
                if(vip === 'yes') {
                    discount = 0.1
                }
            }else if(package === 'noEquipment') {
                price = 80
                if(vip === 'yes') {
                    discount = 0.05
                }
            }else{
                isInvalid = true
            }

        break;
        case 'Varna':
        case 'Burgas':
            if(package === 'withBreakfast') {
                price = 130
                if(vip === 'yes') {
                    discount = 0.12
                }
            }else if(package === 'noBreakfast') {
                price = 100
                if(vip === 'yes') {
                    discount = 0.07
                }
            }else{
                isInvalid = true
            }
        break;
        default:
            isInvalid = true
        break;
    }



    if(days < 1){
        console.log(`Days must be positive number!`);
    }else if(days > 7){
        if(isInvalid === true){
            console.log(`Invalid input!`);
        }else{
        days = days - 1

        price = days * price
        finalPrice = price - (discount * price)

        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
        }
    }else{
        if(isInvalid === true){
            console.log(`Invalid input!`);
        }else{
        price = days * price
        finalPrice = price - (discount * price)

        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
        }
}

}
travelAgency(["Varna",
"withBreakfast",
"no",
"0"])

