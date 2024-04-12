function biggerHalf(array) {
    let sorted = array.sort((a, b) => a - b).slice(array.length / 2);
    return sorted;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);