function walking(input) {
    let goal = 10000;
    let index = 0;
    let totalSteps = 0;
    let steps = input[index];
    index++

    while (steps !== "Going home") {
        steps = Number(steps);
        totalSteps += steps
        if(totalSteps >= goal) {
            break;
        }

        steps = input[index];
        index++

    }

    if(totalSteps < goal) {
        totalSteps += Number(input[index])
        if(totalSteps < goal) {
        console.log(`${goal - totalSteps} more steps to reach goal.`);
        }else{
        console.log('Goal reached! Good job!');
        console.log(`${totalSteps - goal} steps over the goal!`);
        }
    }else{
        console.log('Goal reached! Good job!');
        console.log(`${totalSteps - goal} steps over the goal!`);   
    }

}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])