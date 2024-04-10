function daysInAMonth(month, year) {
    let days = new Date(year, month, 0).getDate();
    console.log(days);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);