class Point{
    constructor(firstPoint, secondPoint){
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
    }

    static distance(x, y){
        let a = x.firstPoint - y.firstPoint
        let b = x.secondPoint - y.secondPoint

        return Math.sqrt(a ** 2 + b ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
