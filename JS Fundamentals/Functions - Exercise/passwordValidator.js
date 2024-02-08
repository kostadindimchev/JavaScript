function passwordValidator(password) {

    let lengthValidator = isLengthEnough(password);
    let cosistValidator = isConsistOnlyDigitsAndLetters(password);
    let digitsValidator = isCosistAtLeastTwoDigits(password);

    if(lengthValidator && cosistValidator && digitsValidator) {
        console.log("Password is valid");
    }
    if(!lengthValidator) {
        console.log("Password must be between 6 and 10 characters");
    }
    if(!cosistValidator) {
        console.log("Password must consist only of letters and digits");
    }
    if(!digitsValidator) {
        console.log("Password must have at least 2 digits");
    }

    function isLengthEnough(password) {
        if(password.length >= 6 && password.length <= 10){
            return true;
        }else{
            return false;
        }
    }

    function isConsistOnlyDigitsAndLetters(password) {
        for(let i = 0; i < password.length; i++) {
            if(
              !(password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) &&
              !(password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90 ) &&
              !(password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122)
              ) {
                return false;
            }
        }
        return true;
    }

    function isCosistAtLeastTwoDigits(password) {
        let counter = 0
        for(let i = 0; i < password.length; i++) {
            if(password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
                counter++
            }
        }
        if(counter < 2) {
            return false;
        }else{
            return true;
        }
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');