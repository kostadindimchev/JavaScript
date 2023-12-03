function examPreparation(input) {
    let avgGrade = 0
    let badGrades = 0
    let lastProblem = ''
    let maxBadGradesReached = false
    let goodGrades = 0
    let sum = 0

    index = 0
    let maxBadGrades = Number(input[index])
    index++
    let problemName = input[index]
    index++
    let grade = Number(input[index])
    index++

    while(problemName !== 'Enough') {
    lastProblem = problemName

    if(grade <= 4) {
        badGrades++
    }else{
        goodGrades++
    }

    sum += grade

    if(maxBadGrades === badGrades) {
        maxBadGradesReached = true
        break;
    }
    problemName = input[index]
    index++

    grade = Number(input[index])
    index++
    }

    avgGrade = sum / (badGrades + goodGrades)

    if(maxBadGradesReached === true){
        console.log(`You need a break, ${badGrades} poor grades.`);
    }else{
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${badGrades + goodGrades}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

examPreparation(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])