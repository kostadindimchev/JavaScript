function theMostPowerfulWord(input) {
    index = 0;
    let command = input[index];
    let winner = '';
    let theMostPower = Number.MIN_SAFE_INTEGER;
    let isFisrtLetter = false;

    while(command !== 'End of words') {
        let word = command
        let wordPower = 0;
        let wordLength = word.length

        for(let i = 0; i < wordLength; i++) {
            let ascii = word.charCodeAt(i);

        if(i < 1) {
            wordPower += ascii;
    
            if (ascii === 97 || ascii === 101 || ascii === 105 ||
                ascii === 111 || ascii === 117 || ascii === 121 ||
                ascii === 65 || ascii === 69 || ascii === 73 ||
                ascii === 79 || ascii === 85 || ascii === 89) {
                isFisrtLetter = true;
                }
            }else{
            wordPower += ascii;
            }

        }
        if(isFisrtLetter) {
            wordPower *= wordLength;
        }else{
            wordPower = Math.floor(wordPower / wordLength);
        }

        if(wordPower > theMostPower) {
            theMostPower = wordPower;
            winner = word;
        }

        isFisrtLetter = false;

        command = input[index]
        index++
    }

    console.log(`The most powerful word is ${winner} - ${theMostPower}`);
}
theMostPowerfulWord(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])

