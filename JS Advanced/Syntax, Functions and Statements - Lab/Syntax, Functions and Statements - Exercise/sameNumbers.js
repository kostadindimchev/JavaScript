function sameNumbers(num) {
    num = num.toString()
    let firstNum = num[0];
    let isSame = true;
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
        if(firstNum !== num[i]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);