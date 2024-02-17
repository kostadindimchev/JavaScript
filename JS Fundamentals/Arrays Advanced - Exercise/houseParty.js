function houseParty(input) {
    let list = [];
    for (let element of input) {
        let curElement = element.split(' ')
        let name = curElement[0];
        if(curElement.length === 3){
            if(list.includes(name)) {
                console.log(`${name} is already in the list!`);
            }else{
                list.push(name);
            }
        }else{
            if(list.includes(name)) {
                let position = list.indexOf(name)
                list.splice(position, 1)
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join('\n'));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);