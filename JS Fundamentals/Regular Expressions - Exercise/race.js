function race(input) {
    let obj = {};
    let participants = input.shift().split(', ');
    
    for (const line of input) {
        if(line !== 'end of race') {
           let racer = line.match(/[A-Z]+/gi).join('');
           let distance = line.match(/\d/g)
           let totalDist = 0
           totalDist = distance
            .map(Number)
            .reduce((a, b) => a + b);

           if(participants.includes(racer)) {
                if(obj.hasOwnProperty(racer)) {
                    obj[racer] += totalDist;
                }else{
                    obj[racer] = totalDist;
                }
           }
        }  
    }
    let sorted = Object
    .entries(obj)
    .sort((a, b) => b[1] - a[1])
    
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);