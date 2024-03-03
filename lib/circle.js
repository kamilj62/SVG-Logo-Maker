const Shape = require('./shapes');

class Circle extends Shape {
    constructor(radius, color) {
        super(radius, color);
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // Define the center coordinates of the circle
        const cx = this.base / 2; // x-coordinate of the center
        const cy = this.height / 2; // y-coordinate of the center

        // Define the radius of the circle (assuming base is the diameter)
        const radius = this.base / 2;

        // Return the SVG representation of the circle
        return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${this.color}" />`;
    }
}

module.exports = Circle;