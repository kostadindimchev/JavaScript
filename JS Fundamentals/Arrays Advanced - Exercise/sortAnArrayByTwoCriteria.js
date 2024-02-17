function sortAnArrayByTwoCriteria(array) {
    array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(array.join('\n'));
}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);