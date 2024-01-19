function rightPlace(word, char, result) {
    let newWord = ''

    for(let i = 0; i < word.length; i++) {
       if(word[i] === '_') {
        newWord += char
       }else{
        newWord += word[i]
       }
    }

    if(result === newWord) {
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String' );