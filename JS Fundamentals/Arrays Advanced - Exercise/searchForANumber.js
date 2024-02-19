function searchForANumber(numbers, array) {
    let elementsToTake = array[0];
    let elementsToDelete = array[1];
    let searchFor = array[2];

    let elements = numbers.splice(0, elementsToTake);
    elements.splice(0, elementsToDelete);
    
    let counter = 0
    for (let check of elements) {
        if(check === searchFor) {
            counter++
        }
    }
    console.log(`Number ${searchFor} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);