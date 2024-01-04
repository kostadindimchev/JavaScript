function tournamentOfChristmas(input) {
    let index = 0
    let tournamentDays = Number(input[index]);
    index++
    let moneyRaised = 0
    let winnerDays = 0
    let loserDays = 0

    let command = input[index];

    for(let i = 0; i < tournamentDays; i++) {

        let wins = 0
        let loses = 0
        let dayMoney = 0 

        while(command !== 'Finish') {
            let sport = input[index++];
            let result = input[index++];
            if(result === 'win') {
                wins++
                dayMoney += 20
            }else{
                loses++
            }

            command = input[index];
        }

        if(wins > loses) {
            moneyRaised += 1.10 * dayMoney
            winnerDays++
        }else{
            loserDays++
            moneyRaised += dayMoney
        }
        index++
        command = input[index]
    }

    if(winnerDays > loserDays) {
        moneyRaised = 1.20 * moneyRaised 
        console.log(`You won the tournament! Total raised money: ${moneyRaised.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${moneyRaised.toFixed(2)}`);
    }

}
tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])
