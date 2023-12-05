function building(input) {
    let levels = Number(input[0]);
    let rooms = Number(input[1]);

    for(i = levels; i > 0; i--) {

        let buffer = ''

        for( j = 0; j < rooms; j++) {
            
            if(i === levels) {
                buffer += `L${i}${j} `
            }else if(i % 2 !== 0) {
                buffer += `A${i}${j} `
            }else{
                buffer += `O${i}${j} `
            }
        }

        console.log(buffer);
    }

}

building(["9",

"5"])