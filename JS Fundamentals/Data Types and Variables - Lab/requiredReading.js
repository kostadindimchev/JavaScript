function requiredReading(pages, pagesInHour, days) {
    let totalTime = pages / pagesInHour
    let hoursPerDay = totalTime / days

    console.log(hoursPerDay);

}

requiredReading(212, 20 ,2);
requiredReading(432, 15 ,4);