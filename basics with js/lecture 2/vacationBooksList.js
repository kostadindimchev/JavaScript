function vacationBooks(input) {
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let hoursToRead = pagesCount / pagesPerHour
    let hoursPerDay = hoursToRead / daysCount

    console.log(hoursPerDay);
}

vacationBooks(["432 ","15 ","4 "])