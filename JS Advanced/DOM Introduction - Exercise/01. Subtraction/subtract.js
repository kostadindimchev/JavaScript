function subtract() {
    let firstNum = document.getElementById('firstNumber');
    let firstNumAsNum = Number(firstNum.value);

    let secondNum = document.getElementById('secondNumber');
    let secondNumAsNum = Number(secondNum.value);

    let result = document.getElementById('result')
    result.textContent = firstNumAsNum - secondNumAsNum
}