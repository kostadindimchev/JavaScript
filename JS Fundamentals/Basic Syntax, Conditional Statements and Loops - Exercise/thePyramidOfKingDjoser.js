function thePyramidOfKingDjoser(base, increment) {
    let stone = 0
    let marble = 0
    let lapis = 0
    let gold = 0
    let stepCounter = 0

    while(base >= 3) {
        stepCounter++
        stone += ((base - 2) * (base - 2)) * increment

        if(stepCounter % 5 !== 0) {
            marble += ((base * 4) - 4) * increment
        }else{
            lapis += ((base * 4) - 4) * increment
        }

        base -= 2
    }

    stepCounter++
    gold += (base * base) * increment
    stepCounter *= increment

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(stepCounter)}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);