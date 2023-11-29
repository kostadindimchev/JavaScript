function graduation(input) {
    let name = input[0];
    let index = 1
    let grade = Number(input[index])
    let excluded = 0
    let gradeSum = 0

    while(index <= 12){
        if(grade < 4){
            excluded++
            if(excluded >= 2){
                break;
            }
        }
    gradeSum += grade
    index++
    grade = Number(input[index])
    }

    if(excluded < 2){
        let avg = gradeSum/12
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }else if(excluded >= 2){
        console.log(`${name} has been excluded at ${index - 1} grade`);
    }

}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])