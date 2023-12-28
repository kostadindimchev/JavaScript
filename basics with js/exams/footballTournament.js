function footballTournament(input) {
    let teamName = input[0];
    let matchesPlayed = Number(input[1]);

    let w = 0
    let d = 0
    let l = 0
    let points = 0

    if(matchesPlayed === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    }else if(matchesPlayed >= 1) {

        for(let i = 2; i < matchesPlayed + 2; i++) {
            let curMatch = input[i]

            if(curMatch === 'W') {
                w++
                points += 3
            }else if(curMatch === 'D') {
                d++
                points += 1
            }else if(curMatch === 'L') {
                l++
            }
        }

        console.log(`${teamName} has won ${points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${((w / (w + d + l)) * 100).toFixed(2)}%`);
    }


}
footballTournament
(["Chelsea",
"0"])


