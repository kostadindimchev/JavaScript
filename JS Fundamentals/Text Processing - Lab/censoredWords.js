function censoredWords(text, word) {
    let censored = text.split(word)
    console.log(censored.join('*'.repeat(word.length)));
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');