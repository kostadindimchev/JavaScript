function reverseInPlace(array) {
    let holder = '';
    let j = array.length - 1;
    for(let i = 0; i < array.length / 2; i++, j--) {
        holder += array[j] + ' ';
        array.push(array[i]);
    }

    console.log(holder);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);