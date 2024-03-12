function modernTimesOfHashTag(input) {
    array = input.split(' ')
    let result = [];
    let isValid = true;

    for (let el of array) {
        if(el.startsWith('#') && el.length > 1) {
            el = el.substring(1);
            for (let char of el) {
                if((char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || 
                (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)) {
                    isValid = true;
                }else{
                    isValid = false;
                    break;
                }
            }
            if(isValid) {
            result.push(el);
            }
        }
    }
    console.log(result.join('\n'));
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');