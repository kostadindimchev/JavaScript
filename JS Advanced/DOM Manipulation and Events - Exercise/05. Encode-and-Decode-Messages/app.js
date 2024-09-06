function encodeAndDecodeMessages() {
    const firstButton = document.getElementsByTagName('button')[0];
    const firstText = document.getElementsByTagName('textarea')[0];
    const secondButton = document.getElementsByTagName('button')[1];
    const secondText = document.getElementsByTagName('textarea')[1];

    firstButton.addEventListener('click', () => {
        let curMessage = ''
        let text = firstText.value;
        for (let char of text) {
            let encode = String.fromCharCode(char.charCodeAt() + 1);
            curMessage += encode;
        }
        secondText.value = curMessage;
        firstText.value = '';
    })

    secondButton.addEventListener('click', () => {
        let curMessage = ''
        let text = secondText.value;
        for(let char of text) {
            let encode = String.fromCharCode(char.charCodeAt() - 1);
            curMessage += encode;
        }
        secondText.value = curMessage;
    })
}