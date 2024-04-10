function aggregateElements(array) {
    let sum = 0;
    let sum1 = 0;
    let concat = '';
    for (let num of array) {
        sum += Number(num);
        sum1 += 1/Number(num);
        concat += num
    }

    console.log(sum);
    console.log(sum1);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);