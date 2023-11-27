function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let musala = 0
    let monblan = 0
    let kilimandjaro = 0
    let k2 = 0
    let everest = 0

    for(let i = 1; i <= groupsCount + 1; i++) {
        if(Number(input[i]) <= 5 ) {
            musala += Number(input[i])
        }
        else if(Number(input[i]) <= 12) {
            monblan += Number(input[i])
        }
        else if(Number(input[i]) <= 25) {
            kilimandjaro += Number(input[i])
        }
        else if(Number(input[i]) <= 40) {
            k2 += Number(input[i])
        }
        else if(Number(input[i]) >= 41) {
            everest += Number(input[i])
        }
    }
    let all = musala + monblan + kilimandjaro + k2 + everest
    musala = (musala / all) * 100
    monblan = (monblan / all) * 100
    kilimandjaro = (kilimandjaro / all) * 100
    k2 = (k2/ all) * 100
    everest = (everest / all) * 100

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblan.toFixed(2)}%`);
    console.log(`${kilimandjaro.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);
}

trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])