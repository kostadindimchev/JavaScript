function triplesOfLatinLetters(n) {
    for(let num = 0; num < n; num++) {
        for(let numb = 0; numb < n; numb++) {
            for(let numbe = 0; numbe < n; numbe++) {
            let letterOne = String.fromCharCode(97+num);
            let letterTwo = String.fromCharCode(97+numb);
            let letterThree = String.fromCharCode(97+numbe);
            console.log(letterOne + letterTwo + letterThree);
            }
        }
    }
}

triplesOfLatinLetters('3');
triplesOfLatinLetters('2');