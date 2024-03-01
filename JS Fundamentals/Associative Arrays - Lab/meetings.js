function meetings(input) {
    let result = {};

    for (let line of input) {
        let [date, name] = line.split(' ');
        if(result.hasOwnProperty(date)) {
            console.log(`Conflict on ${date}!`);
        }else{
            result[date] = name;
            console.log(`Scheduled for ${date}`);
        }
    }

    for(let el in result) {
        console.log(el, '->', result[el]);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);