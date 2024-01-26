function reverseAnArrayOfNumbers(num, array) {
    let newArray = [];
    for(let i = num - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    
    console.log(newArray.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);