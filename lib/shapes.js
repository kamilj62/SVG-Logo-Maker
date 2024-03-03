class Shape {
    constructor(height, color) {
        this.height = height,
        this.color = color
    };
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
        this.color = 'black'; // Default color
    }

    calculateArea() {
        return this.height * this.base / 2;
    }
}


class Circle {
    constructor(height, color) {
        this.height = height;
        this.color = color;
    }

    calculateArea() {
        return Math.PI * (this.height / 2) ** 2;
    }
}

class Square {
    constructor(base, height) {
        this.base = base;
        this.height = height;
        this.color = 'black'; // Default color
    }
    calculateArea() {
        return this.height * this.base;
    }
}

module.exports = { Triangle, Circle, Square, Shape };