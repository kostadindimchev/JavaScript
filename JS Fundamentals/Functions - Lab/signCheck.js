function signCheck(numOne, numTwo, numThree) {
    let negativeNumber = number => number < 0
    
    let negativeCounter = 0

    if(negativeNumber(numOne)){
        negativeCounter++
    }

    if(negativeNumber(numTwo)){
        negativeCounter++
    }

    if(negativeNumber(numThree)) {
        negativeCounter++
    }

    return negativeCounter % 2 === 0 ? 'Positive' : 'Negative';
    
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);