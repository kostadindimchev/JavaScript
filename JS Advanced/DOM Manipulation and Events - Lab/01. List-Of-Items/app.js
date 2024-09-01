function addItem() {
    let inputElement = document.getElementById('newItemText');
    let liElement = document.getElementById('items')

    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value
    liElement.appendChild(newElement);
    inputElement.value = '';
}