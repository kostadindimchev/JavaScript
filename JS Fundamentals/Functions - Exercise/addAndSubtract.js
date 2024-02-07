function addAndSubtract(numOne, numTwo, numThree) {
    let add = sum(numOne, numTwo);
    let result = subtract(add, numThree);
    console.log(result);

    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    
    function subtract(addResult, thirdNum) {
        return addResult - thirdNum;
    }
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);