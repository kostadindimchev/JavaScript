function listProcessor(input) {
    let result = [];

    while(input.length > 0){
        let line = input.shift();
        let [command, string] = line.split(' ');
        let obj = {
            add: (string) => result.push(string),
            remove: (string) => result = result.filter(x => x !== string),
            print: () => console.log(result.join(',')),
        };
        obj[command].call(this, string);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);