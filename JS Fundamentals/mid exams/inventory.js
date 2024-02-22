function inventory(input) {
    let journal = input.shift().split(', ');
    let commands = input.shift();

    while(commands !== 'Craft!') {
        let tokens = commands.split(' - ');
        let command = tokens[0];
        let item = tokens[1];

        if(command === 'Collect') {
            if(!journal.includes(item)) {
                journal.push(item);
            }
        }else if(command === 'Drop') {
            if(journal.includes(item)) {
                journal.splice(journal.indexOf(item), 1)
            }
        }else if(command === 'Combine Items') {
            let secondaryTokens = item.split(':');
            let oldItem = secondaryTokens[0];
            let newItem = secondaryTokens[1];

            if(journal.includes(oldItem)) {
                journal.splice(journal.indexOf(oldItem) + 1, 0, newItem);
            }
        }else if(command === 'Renew') {
            if(journal.includes(item)) {
                journal.splice(journal.indexOf(item), 1);
                journal.push(item)
            }
        }
        commands = input.shift();
    }
    console.log(journal.join(', '));
}

inventory(['Iron, Wood, Sword',
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!']);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);