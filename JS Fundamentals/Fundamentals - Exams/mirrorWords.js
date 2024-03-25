function mirrorWords(input) {
    let text = input.shift();
    let mirrored = [];

    let pattern = /(#|@)[a-zA-Z]{3,}\1\1[a-zA-Z]{3,}\1/gm
    let match = text.match(pattern);

    if(match !== null) {
        console.log(`${match.length} word pairs found!`);

        for (let el of match) {
            let word1 = el.slice(1, (el.length / 2) - 1);
            let word2 = el.slice((el.length / 2) + 1, el.length - 1);
            let word2Reversed = word2.split('').reverse().join('')

            if(word1 === word2Reversed) {
            mirrored.push(`${word1} <=> ${word2}`)
            }
        }

    } else {
        console.log("No word pairs found!");
    }

    if(mirrored.length === 0) {
        console.log("No mirror words!");
    }else{
        console.log("The mirror words are:")
        console.log(mirrored.join(', '));
    } 
}

mirrorWords([
'@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);