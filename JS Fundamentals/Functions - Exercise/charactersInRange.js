function charactersInRange(charOne, charTwo) {
    let arrOfChars = [];
    let start = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let end = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));

    for(let i = start + 1; i < end; i++) {
        let currChar = String.fromCharCode(i)
        arrOfChars.push(currChar) 
    }

    console.log(arrOfChars.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');