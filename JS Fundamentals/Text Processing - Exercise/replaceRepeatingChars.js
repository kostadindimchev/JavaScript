function replaceRepeatingChars(input) {
    let output = '';

    for(let i = 0; i <= input.length; i++) {
        let curChar = input[i];
        let nextChar = input[i + 1];
        if(curChar !== nextChar) {
            output += curChar
        }
    }

    console.log(output);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');