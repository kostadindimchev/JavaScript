function pascalCaseSplitter(input) {
    input = input.split('');
    let list = []
    let word = '';
    
    for(let i = 0; i <= input.length; i++) {
        let curChar = input[i];
        let nextChar = input[i + 1];
        word += curChar;
        if(nextChar === undefined) {
            break;
        }
        if(nextChar === nextChar.toLocaleUpperCase()) {
            list.push(word);
            word = ''
        }
    }
    list.push(word);

    console.log(list.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');