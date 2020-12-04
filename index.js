// Your code here
class Polygon {
    // Polygon will accept an Array of integers as a parameter
    constructor(array) {
        // which will represent each side of a shape
        this.sides = array
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, num) => {return total + num})
    }
}