function addAndRemoveElements(array) {
    let nums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'add'){
            nums.push(i + 1);
        }else if(array[i] === 'remove'){
            nums.pop();
        }
    }

    if(nums.length > 0){
        console.log(nums.join('\n'));
    }else{
        console.log('Empty');
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);