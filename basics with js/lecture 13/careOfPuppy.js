function careOfPuppy(input) {
    let foodInGrams = Number(input[0]) * 1000
    index = 1
    let allFood = 0
    let command = input[index]
    index++

    while(command !== 'Adopted') {
        let foodEaten = Number(command)
        allFood += foodEaten

        command = input[index]
        index++
    }

    if(allFood <= foodInGrams) {
        console.log(`Food is enough! Leftovers: ${foodInGrams - allFood} grams.`);
    }else{
        console.log(`Food is not enough. You need ${allFood - foodInGrams} grams more.`);
    }

}
careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])