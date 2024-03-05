function schoolGrades(input) {
    let gradesList = {};

    for (let line of input) {
        let tokens = line.split(' ')
        let name = tokens.shift();
        let grades = tokens.map(Number)
        if(!gradesList.hasOwnProperty(name)) {
            gradesList[name] = [];
        }
        let existing = gradesList[name];
        for (let grade of grades) {
            existing.push(grade)
        } 
    }
    
    let sorted = Object.entries(gradesList)
    .sort((a,b) => a[0].localeCompare(b[0]));

    for(let el of sorted) {
        let avg = avgGrade(el[1])
        console.log(`${el[0]}: ${avg.toFixed(2)}`);
    }

    function avgGrade(array) {
        let numsCount = Number(array.length)
        let sum = 0
        for (let num of array) {
            sum += num
        }
        let result = sum / numsCount

        return result
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);