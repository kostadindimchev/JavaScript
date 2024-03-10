function countStringOccurrences(text, word) {
    let arr = text.split(' ').filter(x => x === word).length
    console.log(arr);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 
'softuni');