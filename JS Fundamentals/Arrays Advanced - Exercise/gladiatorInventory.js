function gladiatorInventory(input) {
    let invetory = [];
    let items = input.shift();
    invetory = items.split(' ');
    
    for (let commands of input) {
        let command = commands.split(' ');
        let currCommand = command[0];
        let equipment = command[1];
        if(currCommand === 'Buy') {
            if(!invetory.includes(equipment)) {
            invetory.push(equipment);
            }
        }else if(currCommand === 'Trash') {
            if(invetory.includes(equipment)) {
                invetory.splice(invetory.indexOf(equipment), 1);
            }
        }else if(currCommand === 'Repair') {
            if(invetory.includes(equipment)) {
                invetory.splice(invetory.indexOf(equipment), 1);
                invetory.push(equipment);
            }
        }else if(currCommand === 'Upgrade') {
            let upgrade = equipment.split('-');
            if(invetory.includes(upgrade[0])) {
                invetory.splice(invetory.indexOf(upgrade[0]) + 1, 0, `${upgrade[0]}:${upgrade[1]}`);
            }
        }

    }
    console.log(invetory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);