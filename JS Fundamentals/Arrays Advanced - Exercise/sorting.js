function sorting(array) {
    let sorted = [];
    array.sort((a, b) => b - a)
    while(array.length > 0){
    sorted.push(array.shift());
    sorted.push(array.pop());
    }
    console.log(sorted.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);