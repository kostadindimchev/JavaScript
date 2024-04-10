function cookingByNumbers(num, p1, p2, p3, p4, p5) {
    let operations = [p1, p2, p3, p4, p5];

    for (let operation of operations) {
        if(operation === 'chop'){
            num /= 2;
            console.log(num);
        }else if(operation === 'dice'){
            num = Math.sqrt(num);
            console.log(num);
        }else if(operation === 'spice'){
            num++;
            console.log(num);
        }else if(operation === 'bake'){
            num *= 3;
            console.log(num);
        }else if(operation === 'fillet'){
            num = num * 0.80;
            console.log(num.toFixed(1));
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');