function softUniBarIncome(input) {
    let totalIncome = 0
    for (const line of input) {
        if(line !== 'end of shift') {
            let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.\d]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+\.*\d*)\$/g
            let result = pattern.exec(line)
            if(result) {
                let name = result.groups.name;
                let product = result.groups.product;
                let price = +result.groups.price * +result.groups.count;

                totalIncome += +price

                console.log(`${name}: ${product} - ${price.toFixed(2)}`);
            }
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);