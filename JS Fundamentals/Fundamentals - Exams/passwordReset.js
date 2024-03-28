function passwordReset(input) {
    let string = input.shift();

    while (input[0] !== 'Done') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if(command === 'TakeOdd') {
            let arr = string.split('');
            let count = 0;
            let newString = [];
            for (let char of arr) {
                if(count === 1){
                    newString.push(char);
                    count = 0
                }else{
                count++
                }
            }
            string = newString.join('');
            console.log(string);

        }else if(command === 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);

            let left = string.slice(0, index);
            let rigth = string.slice(index + length);
            string = left + rigth
            console.log(string);

        }else if(command === 'Substitute') {
            let substring = tokens[1];
            let substitute = tokens[2]
            if(string.includes(substring)) {
                string = string.split(substring).join(substitute);
                console.log(string);
            }else{
                console.log("Nothing to replace!");
            }
        }
    }

    console.log(`Your password is: ${string}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);