function wordsUpperCase(input) {
    let pattern = /[A-Za-z0-9]+/gm
    let match = pattern.exec(input);
    let list = [];

    while(match !== null){
        let word = match[0]
        list.push(word.toUpperCase())

        match = pattern.exec(input);
    }
    console.log(list.join(', '));
}

wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');