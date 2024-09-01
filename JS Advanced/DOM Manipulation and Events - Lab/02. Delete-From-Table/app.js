function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let tabelElements = document.querySelectorAll("#customers tr td:nth-child(2)");
    let resultElement = document.getElementById('result')

    for (const el of tabelElements) {
        if(inputElement.value === el.textContent){
            el.parentElement.remove();
            resultElement.textContent = 'Deleted.';
            inputElement.value = '';
        }else{
            resultElement.textContent = 'Not found.';
        } 
    }
}