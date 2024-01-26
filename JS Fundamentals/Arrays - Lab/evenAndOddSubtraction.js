function evenAndOddSubtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i < arr.length; i++) {
        let toNum = Number(arr[i]);

        if(toNum % 2 === 0) {
            sumEven += toNum;
        }else{
            sumOdd += toNum;
        }
    }

    console.log(`${sumEven - sumOdd}`);
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);