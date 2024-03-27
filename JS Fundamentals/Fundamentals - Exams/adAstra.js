function adAstra(input) {
    let text = input.shift();
    let totalCals = 0;
    let pattern = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<cals>[0-9]{1,5})\1/gm
    let arr = []

    let match = pattern.exec(text);

    while(match !== null) {
    let cals = match.groups.cals;
    let item = match.groups.item;
    let expDate = match.groups.expDate;
    totalCals += +cals;
    match = pattern.exec(text);
    arr.push(`Item: ${item}, Best before: ${expDate}, Nutrition: ${cals}`)
    }

    let days = Math.floor(totalCals / 2000)
    console.log(`You have food to last you for: ${days} days!`);

    for (let el of arr) {
        console.log(el);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);