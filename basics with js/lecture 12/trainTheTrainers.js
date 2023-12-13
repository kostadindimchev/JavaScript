function trainTheTrainers(input) {
    let judgesCount = Number(input[0])
    index = 1
    let generalSum = 0
    let generalRatingsSum = 0

    let command = input[index]

    while(command !== 'Finish') {

        let ratingSum = 0

        let presentationName = input[index]
        index++

        for(let i = 0; i < judgesCount; i++) {
            let rating = Number(input[index])
            ratingSum += rating
            generalSum += rating
            generalRatingsSum++
            index++
        }

        console.log(`${presentationName} - ${(ratingSum / judgesCount).toFixed(2)}.`);
        
        command = input[index]
    }

    console.log(`Student's final assessment is ${(generalSum / generalRatingsSum).toFixed(2)}.`);

}

trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])