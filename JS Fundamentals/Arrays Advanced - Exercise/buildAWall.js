function buildAWall(array) {
  array.map(Number);
  let totalConcreteUsed = 0;
  let newArray = array.map((x) => x);
  let concreteDaily = [];

  while (newArray.length > 0) {

    for (let el of newArray) {
      if (el === 30) {
        while(newArray.includes(el)) {
        newArray.splice(newArray.indexOf(el), 1);
        }
      }
    }
    let concreteUsed = newArray.length * 195;
    totalConcreteUsed += concreteUsed;
    if(concreteUsed > 0) {
    concreteDaily.push(concreteUsed);
    }

    newArray = newArray.map((x) => x + 1);
  }
  console.log(concreteDaily.join(', '));
  let totalCost = totalConcreteUsed * 1900
  console.log(`${totalCost} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);
