function wordOccurrences(array) {
    let counter = new Map();

    for (let line of array) {
        let count = 1
        if(counter.has(line)) {
            let existed = counter.get(line)
            counter.set(line, count + existed)
        }else{
            counter.set(line, count)
        }
    }
    
    let sorted = Array.from(counter)
    .sort((a,b) => b[1] - a[1]);

    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad",
"boys", "ginger"]);