function renovation(input) {
    let index = 0
    let heigth = Number(input[index])
    index++
    let width = Number(input[index])
    index++
    let noPaint = Number(input[index])
    index++

    let command = input[index]
    index++
    let litersPaint = 0

    let toPaint = Math.ceil((heigth * width * 4) - ((noPaint/100) * (heigth * width * 4)))

    while(command !== 'Tired!') {
        litersPaint += Number(command)
       
        if(litersPaint > toPaint) {
            console.log(`All walls are painted and you have ${litersPaint - toPaint} l paint left!`);
            break;
        }else if(litersPaint === toPaint) {
            console.log("All walls are painted! Great job, Pesho!" );
            break;
        }

        command = input[index]
        index++
    }

    if(command === 'Tired!') {
        console.log(`${toPaint - litersPaint} quadratic m left.` );
    }

}
renovation
(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"])
