function secretChat(input) {
    let message = input.shift();

    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll,
    }

    while(input[0] !== 'Reveal') {
        let tokens = input.shift().split(':|:');
        let name = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        let command = commands[name];
        message = command(p1, p2);
    }

    console.log(`You have a new text message: ${message}`);

    function InsertSpace(index) {
        let left = message.slice(0, index);
        let right = message.slice(index)
        message = left + ' ' + right
        console.log(message);

        return message;
    }

    function Reverse(substring) {
        let index = message.indexOf(substring);

        if(index !== -1) {
            let left = message.slice(0, index);
            let center = message.slice(index + substring.length);
            let right = message.slice(index, index + substring.length);
            message = left + center + right.split('').reverse().join('');

            console.log(message);

            return message;
        }else{
            console.log('error');

            return message;
        }
    }

    function ChangeAll(substring, replacement) {
        message = message.split(`${substring}`).join(`${replacement}`);

        console.log(message);

        return message;
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);