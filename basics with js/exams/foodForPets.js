function foodForPets(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    
    let dogFood = 0
    let catFood = 0
    let dogFoodTotal = 0
    let catFoodTotal = 0
    let biscuits = 0
    let index = 2

    for(let i = 1; i <= days; i++) {
            dogFood = Number(input[index++])
            catFood = Number(input[index++])

            dogFoodTotal += dogFood
            catFoodTotal += catFood

        if(i % 3 === 0) {
            biscuits += 0.10 * (catFood + dogFood)
        }
    }

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${(((dogFoodTotal + catFoodTotal) / food) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogFoodTotal / (dogFoodTotal + catFoodTotal)) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFoodTotal / (dogFoodTotal + catFoodTotal)) * 100).toFixed(2)}% eaten from the cat.`);

}
foodForPets
(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])
