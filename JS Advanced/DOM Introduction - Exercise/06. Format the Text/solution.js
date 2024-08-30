function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  let inputArr = input.split('.').filter(x => x !== '');

  while (inputArr.length > 0) {
    let result = inputArr.splice(0,3).join('.') + '.'
    let p = document.createElement('p');
    p.textContent = result;
    output.appendChild(p)
  }
}