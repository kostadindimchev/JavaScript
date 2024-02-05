function formatGrades(grade) {
    let description = '';
    let formated = grade.toFixed(2)
    if(grade < 3) {
        formated = 2
        description = 'Fail'
    }else if(grade < 3.50) {
        description = 'Poor'
    }else if(grade < 4.50) {
        description = 'Good'
    }else if(grade < 5.50) {
        description = 'Very good'
    }else{
        description = 'Excellent'
    }

    console.log(`${description} (${formated})`);
}

formatGrades(3.33);
formatGrades(4.50);
formatGrades(2.99);