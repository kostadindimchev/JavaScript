function validate() {
    const regex = /[a-z]+@[a-z]+\.[a-z]+/gm
    const input = document.getElementById('email');

    input.addEventListener('change', () => {
        if(regex.test(input.value)){
            input.classList.remove('error');
        }else{
            input.className = 'error';
        }
    })
}