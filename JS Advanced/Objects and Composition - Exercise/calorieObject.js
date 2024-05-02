function calorieObject(array) {
  let obj = {};

  for (let i = 0; i < array.length; i += 2) {
    let name = array[i];
    let cals = Number(array[i + 1]);
    obj[name] = cals;
  }
  console.log(obj);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
