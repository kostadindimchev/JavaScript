function coins(input) {
    let change = Number(input[0]);
    let changeInStotinki = Math.round(change * 100)
    let coinsCount = 0

    while(changeInStotinki !== 0) {
        if(changeInStotinki >= 200) {
            changeInStotinki -= 200
        }else if(changeInStotinki >= 100) {
            changeInStotinki -= 100
        }else if(changeInStotinki >= 50) {
            changeInStotinki -= 50
        }else if(changeInStotinki >= 20) {
            changeInStotinki -= 20
        }else if(changeInStotinki >= 10) {
            changeInStotinki -= 10
        }else if(changeInStotinki >= 5) {
            changeInStotinki -= 5
        }else if(changeInStotinki >= 2) {
            changeInStotinki -= 2
        }else if(changeInStotinki >= 1) {
            changeInStotinki -= 1
        }

        coinsCount++
    }
    console.log(coinsCount);
}

coins(["0.56"])