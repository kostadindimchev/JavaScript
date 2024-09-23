function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyCheckbox = document.getElementById('company');
    const companyNumber = document.getElementById('companyNumber');
    const submit = document.getElementById('submit');
    const valid = document.getElementById('valid');

    companyCheckbox.addEventListener('change', () => {
        document.getElementById('companyInfo').style.display = companyCheckbox.checked ? 'block' : 'none';
    })

    submit.addEventListener('click', (event) => {
        event.preventDefault();

        let isValid = true;

        const regexName = /^[A-Za-z0-9]{3,20}$/;
        if(regexName.test(username.value)){
            username.style.border = 'none';
        }else{
            username.style.border = '';
            username.style.borderColor = 'red';
            isValid = false;
        }

        const index = email.value.indexOf('@');
        if (index > 0 && email.value.includes('.', index)) {
            email.style.border = 'none';
        }else{
            email.style.border = '';
            email.style.borderColor = 'red';
            isValid = false;
        }

        const passRegex = /^\w{5,15}$/gm
        if(passRegex.test(password.value) && confirmPassword.value === password.value){
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
        }else{
            password.style.border = '';
            password.style.borderColor = 'red';
            confirmPassword.style.border = '';
            confirmPassword.style.borderColor = 'red'
            isValid = false;
        }

        if(companyCheckbox.checked){
            if(companyNumber.value >= 1000 && companyNumber.value <= 9999){
                companyNumber.style.border = 'none';
            }else{
                companyNumber.style.border = '';
                companyNumber.style.borderColor = 'red';
                isValid = false;
            }
        }

        valid.style.display = isValid ? 'block' : 'none'
    })
}