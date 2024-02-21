function guineaPig(input) {
    let foodInKg = Number(input[0]);
    let hayInKg = Number(input[1]);
    let coverInKg = Number(input[2]);
    let weightInKg = Number(input[3]);
    let month = 30;
    let isEnough = true;

    let food = foodInKg * 1000;
    let hay = hayInKg * 1000;
    let cover = coverInKg * 1000;
    let weight = weightInKg * 1000;

    for(let i = 1; i <= month; i++ ) {
        food -= 300;
        if(i % 2 === 0) {
            hay -= 0.05 * food;
        }
        if(i % 3 === 0) {
            cover -= (1/3) * weight
        }
        if(food <= 0 || hay <= 0 || cover <= 0) {
            isEnough = false;
            console.log("Merry must go to the pet store!");
            break;
        }
    }

    if(isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);