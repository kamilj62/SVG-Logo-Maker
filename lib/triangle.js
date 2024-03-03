// triangle.js
const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(base, height) {
        super(base, height);
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // Define the points for the triangle vertices
        const x0 = 0;
        const y0 = this.height;
        const x1 = this.base / 2;
        const y1 = 0;
        const x2 = this.base;
        const y2 = this.height;
    
        // Return the SVG representation of the triangle
        return `<polygon points="${x0},${y0} ${x1},${y1} ${x2},${y2}" fill="${this.color}" />`;
    }
}

module.exports = Triangle;