function rectangle(width, height, color) {
  let shape = {
    width,
    height,
    color: color.substring(0, 1).toLocaleUpperCase() + color.substring(1),
    calcArea: () => {
      return shape.width * shape.height;
    },
  };
  return shape;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
