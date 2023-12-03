function moving(input) {
    let index = 0

    let width = Number(input[index]);
    index++
    let length = Number(input[index]);
    index++
    let heigth = Number(input[index]);
    index++

    let volume = width * length * heigth

    let boxes = input[index];
    index++

    while(boxes !== 'Done') {
        boxes = Number(boxes)

        volume -= boxes

        if(volume <= 0) {
            break;
        }

        boxes = input[index];
        index++
    }

    if(volume <= 0){
        console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
    }else{
        console.log(`${volume} Cubic meters left.`);
    }


}

moving(["10",

"1",

"2",

"4",
"6",
"Done"])