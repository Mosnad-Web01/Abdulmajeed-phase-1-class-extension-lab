// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sides = this.sides
        let a = sides[0]
        let b = sides[1]
        let c = sides[2]

        return (a + b > c) && (a + c > b) && (b + c > a)
    }
}

class Square extends Polygon {
    get isValid() {
        let sides = this.sides
        return sides[0] === sides[1] && sides[1] === sides[2] && sides[2] === sides[3]
    }

    get area() {
        let side = this.sides[0]
        return side * side
    }
}
