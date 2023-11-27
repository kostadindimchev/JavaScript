function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);
    let pointsWon = 0
    let tournamentsWon = 0

    for(let i = 2; i <= tournamentsCount + 2; i++) {
        if(input[i] === 'W') {
            pointsWon += 2000
            tournamentsWon += 1
        }else if(input[i] === 'F') {
            pointsWon += 1200
        }else if(input[i] === 'SF') {
            pointsWon += 720
        }
    }

    let totalPoints = initialPoints + pointsWon
    let averagePoints = pointsWon / tournamentsCount
    let winRate = (tournamentsWon / tournamentsCount) * 100

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winRate.toFixed(2)}%`);
}

tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"])