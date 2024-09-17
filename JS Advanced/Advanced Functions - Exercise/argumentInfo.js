function argumentInfo(){
    let counter = {};
    
    for (const arg of arguments) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`)

        if(!counter[type]){
            counter[type] = 0
        }
        counter[type]++
    }

    Object
    .entries(counter)
    .sort((a,b) => b[1] - a[1])
    .forEach(x => console.log(`${x[0]} = ${x[1]}`))
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });