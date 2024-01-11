function login(input) {
    index = 0
    counter = 0
    let username = input[index];
    index++

    let password = input[index].split("").reverse().join("");
    index++

    while(username !== password) {
        counter++
        
        if(counter > 3) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log("Incorrect password. Try again.");
        
        password = input[index].split("").reverse().join("");
        index++
    }

    if (username === password) {
        console.log(`User ${username} logged in.`);
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);