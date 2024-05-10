function calc() {
    let numOne = document.getElementById('num1');
    let numTwo = document.getElementById('num2');
    let sum = Number(numOne.value) + Number(numTwo.value);
    document.getElementById('sum').value = sum;
}
