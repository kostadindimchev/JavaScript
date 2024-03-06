function wordsTracker(input) {
    let tracker = {};
    let words = input.shift().split(' ');
    for (let word of words) {
        tracker[word] = 0
    }
    
    for (let el of input) {
        if(tracker.hasOwnProperty(el)) {
            tracker[el]++
        }
    }

    let sorted = Object.entries(tracker)
    .sort((a,b) => b[1] - a[1])

    for (let el of sorted) {
        console.log(`${el[0]} - ${el[1]}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);