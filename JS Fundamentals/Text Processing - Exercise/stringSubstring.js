function stringSubstring(word, text) {
    text = text.split(' ');

    for (const el of text) {
        if(el.toLocaleLowerCase() === word.toLocaleLowerCase()) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}

stringSubstring('javascript',
'JavaScript is the best programming language');
stringSubstring('python',
'JavaScript is the best programming language');