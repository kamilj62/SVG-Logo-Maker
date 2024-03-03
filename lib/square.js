const Shape = require('./shapes');

class Square extends Shape {
    constructor(base, height) {
        super(base, height);
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // Define the points for the square vertices
        const x0 = 0;
        const y0 = 0;
        const x1 = this.base;
        const y1 = 0;
        const x2 = this.base;
        const y2 = this.height;
        const x3 = 0;
        const y3 = this.height;
    
        // Return the SVG representation of the square
        return `<polygon points="${x0},${y0} ${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}" />`;
    }

}

module.exports = Square;