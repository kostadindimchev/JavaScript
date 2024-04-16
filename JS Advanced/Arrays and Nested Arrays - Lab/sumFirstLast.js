function sumFirstLast(array) {
    let first = array.shift();
    let last = array.pop();

    let result = Number(first) + Number(last);
    console.log(result);
}
 
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);