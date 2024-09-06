function addItem() {
    const selectElement = document.getElementById('menu');
    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = newText.value;
    option.value = newValue.value;
    selectElement.appendChild(option);

    newText.value = '';
    newValue.value = '';
}