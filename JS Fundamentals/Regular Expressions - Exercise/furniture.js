function furniture(input) {
    let totalCost = 0;
    console.log('Bought furniture:');

    for (const line of input) {
        if(line === 'Purchase') {
            break;
        }else{
            let regex = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.*\d+)!(?<qty>\d+)/g
            let result = regex.exec(line);
            if(result) {
                let price = (result.groups.price) * (result.groups.qty);
                totalCost += price
                console.log(result.groups.name);
            }
        }
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']);