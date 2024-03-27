function theImitationGame(input) {
    let message = input.shift();

    while(input[0] !== 'Decode') {
        let [command, token1, token2] = input.shift().split('|')

        if(command === 'Move') {
            let right = message.slice(0, +token1);
            let left = message.slice(+token1);
            message = left + right;

        }else if(command === 'Insert') {
            let left = message.slice(0, +token1);
            let right = message.slice(+token1);
            message = left + token2 + right;
            
        }else if(command === 'ChangeAll') {
            message = message.split(token1).join(token2);
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',]);