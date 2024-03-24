function activationKey(input) {
    let key = input.shift().toString();

    while(input[0] !== 'Generate') {
        let tokens = input.shift().split('>>>');

        if(tokens[0] === 'Contains'){
            let substring = tokens[1];
            if(key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            }else{
                console.log("Substring not found!");
            }

        }else if(tokens[0] === 'Flip'){
            let letters = tokens[1];
            let start = Number(tokens[2]);
            let end = Number(tokens[3]);

            let left = key.slice(0, start);
            let rigth = key.slice(end);
            let substring = key.slice(start, end);
            if(letters === 'Upper') {
                substring = substring.toLocaleUpperCase()
            }else if(letters === 'Lower'){
                substring = substring.toLocaleLowerCase()
            }

            key = left + substring + rigth;
            console.log(key);

        }else if(tokens[0] === 'Slice'){
            let start = Number(tokens[1]);
            let end = Number(tokens[2]);

            let left = key.slice(0, start);
            let rigth = key.slice(end);

            key = left + rigth;
            console.log(key);
        }

    }
    console.log(`Your activation key is: ${key}`);
}

activationKey(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);

activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);