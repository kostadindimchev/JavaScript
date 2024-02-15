function arrayManipulator(array, manipulator) {
    for (let command of manipulator) {
        let curCommand = command.split(' ');
        if(curCommand[0] === 'add') {
            array.splice(Number(curCommand[1]), 0, Number(curCommand[2]));
        }else if(curCommand[0] === 'addMany') {
            let changed = Number(curCommand[1])
            curCommand.splice(0, 2)
            let numsToAdd = curCommand.map(Number)
            array.splice(changed, 0, ...numsToAdd);
        }else if(curCommand[0] === 'contains') {
            console.log(array.indexOf(Number(curCommand[1])));
        }else if(curCommand[0] === 'remove') {
            array.splice(Number(curCommand[1]), 1)
        }else if(curCommand[0] === 'shift') {
            for(let i = 0; i < Number(curCommand[1]); i++) {
                array.push(array.shift());
            }
        }else if(curCommand[0] === 'sumPairs') {
            if(array.length % 2 !== 0) {
                array.push(0)
            }
            let temp = [];
            let sum = 0
            let counter = 0
            for (let el of array) {
                sum += Number(el)
                counter++
                if(counter === 2){
                    temp.push(sum);
                    counter = 0;
                    sum = 0;
                }
            }
            array = temp;
        }else if(curCommand[0] === 'print') {
            console.log(`[ ${array.join(', ')} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], 
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3','shift 1', 'print']);