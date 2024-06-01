function toggle() {
    let button = document.querySelector('.button')
    let extraText = document.getElementById('extra')

    if(button.textContent === 'More'){
        button.textContent = 'Less';
        extraText.style.display = 'block';
    }else{
        button.textContent = 'More';
        extraText.style.display = 'none';
    }
}