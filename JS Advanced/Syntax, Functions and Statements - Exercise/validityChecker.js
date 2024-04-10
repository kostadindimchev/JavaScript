function validityChecker(x1, y1, x2, y2) {
    let x1y1 = `{${x1}, ${y1}}`
    let x2y2 = `{${x2}, ${y2}}`
    let start = '{0, 0}'

    let formula1 = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2))
    if(Number.isInteger(formula1)) {
        console.log(`${x1y1} to ${start} is valid`);
    }else{
        console.log(`${x1y1} to ${start} is invalid`);
    }

    let formula2 = Math.sqrt(((0 - x2) ** 2) + ((0 - y2) ** 2))
    if(Number.isInteger(formula2)) {
        console.log(`${x2y2} to ${start} is valid`);
    }else{
        console.log(`${x2y2} to ${start} is invalid`);
    }

    let formula3 = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
    if(Number.isInteger(formula3)) {
        console.log(`${x1y1} to ${x2y2} is valid`);
    }else{
        console.log(`${x1y1} to ${x2y2} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);