function shoppingList(input) {
    let initial = input.shift().split('!');
    let commands = input.shift();

    while(commands !== "Go Shopping!") {
        let tokens = commands.split(' ')
        let command = tokens[0];
        let item = tokens[1];
        let secondItem = tokens[2];

        if(command === 'Urgent') {
            if(!initial.includes(item)) {
                initial.unshift(item);
            }
        }else if(command === 'Unnecessary') {
            if(initial.includes(item)) {
                initial.splice(initial.indexOf(item), 1);
            }
        }else if(command === 'Correct') {
            if(initial.includes(item)) {
                initial.splice(initial.indexOf(item), 1, secondItem);
            }
        }else if(command === 'Rearrange') {
            if(initial.includes(item)) {
                initial.splice(initial.indexOf(item), 1);
                initial.push(item)
            }
        }

        commands = input.shift();
    }

    console.log(initial.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);