function oddOccurrences(input) {
    let obj = {};

    let elements = input.split(' ');
    
    for (let el of elements) {
        el = el.toLocaleLowerCase();
        if(!obj.hasOwnProperty(el)) {
            obj[el] = 1;
        }else{
            obj[el]++
        }
    }
    
    let result = [];

    let array = Object.entries(obj)
    .filter((x) => x[1] % 2 === 1)
    .forEach(x => result.push(x[0]))

    console.log(result.join(' '));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');