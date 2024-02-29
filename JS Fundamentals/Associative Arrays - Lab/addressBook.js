function addressBook(input) {
    let book = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        book[name] = address
    }

    let sort = Object.entries(book).sort((a,b) => a[0].localeCompare(b[0]))
    
    for (let el of sort) {
        console.log(el[0], '->', el[1]);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);