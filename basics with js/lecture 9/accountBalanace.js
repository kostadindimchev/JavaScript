function accountBalance(input) {
    let totalMoney = 0;
    let index = 0;
    let currentElement = input[index];

    while(currentElement !== "NoMoreMoney") {
        elementAsNumber = Number(currentElement)

        if(elementAsNumber < 0){
            console.log("Invalid operation!");
            break;
        }
        
        totalMoney += elementAsNumber
        console.log(`Increase: ${elementAsNumber.toFixed(2)}`);
        
        index++
        currentElement = input[index]; 
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"])