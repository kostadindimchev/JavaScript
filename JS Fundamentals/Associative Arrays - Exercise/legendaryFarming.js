function legendaryFarming(input) {
    
    let collection = {
        'shards': 0,
        'fragments': 0,
        'motes': 0,
    };

    let junk = {};

    let isObtained = false;
    let item = '';

    let array = input.split(' ')

    while(!isObtained && array.length > 1) {
        let qty = Number(array.shift());
        let material = (array.shift()).toLowerCase();

        
        if(collection.hasOwnProperty(material)) {
            collection[material] += qty
        }else{
            if(!junk.hasOwnProperty(material)) {
                junk[material] = qty;
            }else{
                junk[material] += qty
            }
        }

        if(collection[material] >= 250) {
            isObtained = true;
            collection[material] -= 250;
            if(material === 'shards') {
                item = 'Shadowmourne'
            }else if(material === 'fragments') {
                item = 'Valanyr'
            }else{
                item = 'Dragonwrath'
            }
        }
    }

    if(isObtained) {
    console.log(`${item} obtained!`);
    }

    Object
        .entries(collection)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(x => console.log(`${x[0]}: ${x[1]}`));

    Object
        .entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => console.log(`${x[0]}: ${x[1]}`));
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');