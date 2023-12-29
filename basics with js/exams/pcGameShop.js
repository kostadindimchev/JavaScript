function pcGameShop(input) {
    let gamesCount = Number(input[0]);

    let hearthstone = 0
    let fornite = 0
    let overwatch = 0
    let others = 0

    for(let i = 1; i <= gamesCount; i++) {

        let check = input[i]
        
        if(check === 'Hearthstone') {
            hearthstone++
        }else if(check === 'Fornite') {
            fornite++
        }else if(check === 'Overwatch') {
            overwatch++
        }else{
            others++
        }
    }

    let all = hearthstone + fornite + overwatch + others

    console.log(`Hearthstone - ${((hearthstone / all) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((fornite / all) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatch / all) * 100).toFixed(2)}%`);
    console.log(`Others - ${((others / all) * 100).toFixed(2)}%`);
    
}
pcGameShop
(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

