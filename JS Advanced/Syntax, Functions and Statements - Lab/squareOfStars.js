function squareOfStars(input) {
    if(input === undefined){
        input = 5;  
    }
    for(let i = 0; i < input; i++) {
        let buffer = ''
        for(let j = 0; j < input; j++) {
            buffer += '* '
        }
        console.log(buffer);
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
squareOfStars();