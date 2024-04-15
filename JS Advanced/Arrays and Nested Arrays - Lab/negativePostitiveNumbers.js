function negativePositiveNumbers(array) {
    let newArr = [];

    for (let num of array) {
        if(num < 0){
            newArr.unshift(num)
        }else{
            newArr.push(num)
        }
    }
    console.log(newArr);
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);