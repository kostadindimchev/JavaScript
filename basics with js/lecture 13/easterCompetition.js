function easterCompetition(input) {
    let easterBreads = Number(input[0])
    index = 1
    let curWinner = ''
    let maxPoints = 0

    for(let i = 1; i <= easterBreads; i++) {

        let command = input[index]
        let name = command
        index++
        let points = 0

        while(command !== 'Stop') {
            let addedPoints = Number(input[index]);

            points += addedPoints;

            index++
            command = input[index]
        }

        console.log(`${name} has ${points} points.`);
        
        if(points > maxPoints) {
            maxPoints = points
            console.log(`${name} is the new number 1!`);
            curWinner = name
        }

        command = input[index]
        index++

    }

    console.log(`${curWinner} won competition with ${maxPoints} points!`);

}
easterCompetition(["3",
"Chef Manchev",
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])