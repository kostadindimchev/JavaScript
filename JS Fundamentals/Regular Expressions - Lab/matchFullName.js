function matchFullName(names) {
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g

    let valid = [];

    while((validName = pattern.exec(names)) !== null) {
        valid.push(validName[0]);
    }

    console.log(valid.join(' '));
}

matchFullName(['Ivan Ivanov', 'Ivan ivanov', 'ivan Ivanov', 'IVan Ivanov', 'Test Testov', 'Ivan Ivanov']);