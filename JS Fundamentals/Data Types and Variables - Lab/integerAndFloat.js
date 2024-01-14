function integerAndFloat(first, second, third) {
    let sum = Number(first) + Number(second) + Number(third)
    let type = ''

    if(sum % 1 === 0) {
        type = 'Integer'
    }else{
        type = 'Float'
    }

    console.log(`${sum} - ${type}`);
}

integerAndFloat(9, 100, 1.1 );
integerAndFloat(100, 200, 303);