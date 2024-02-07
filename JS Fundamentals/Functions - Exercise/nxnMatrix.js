function nxnMatrix(num) {
    let row = ''
    for(let r = 0; r < num; r++){
        row += num.toString() + ' ';
    }
    for(let c = 0; c < num; c++){
    console.log(row);
    }
}

nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);