const {Circle, Triangle, Square } = require('../lib/shapes');

// Test the render method of the Circle class
describe('Circle', () => {
    test('render method should return correct SVG string with the specified color', () => {
      const circle = new Circle();
      circle.setColor('red');
      const expectedSVG = '<circle cx="150" cy="100" r="80" fill="red" />';
      expect(circle.render()).toEqual(expectedSVG);
    });
  });

// Test the render method of the Triangle class
describe('Triangle', () => {
    test('Render method should return correct SVG string with the specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      expect(triangle.render()).toEqual(expectedSVG);
    });
  });


// Test the render method of the Square class
describe('Square', () => {
    test('render method should return correct SVG string with the specified color', () => {
      const square = new Square();
      square.setColor('green');
      const expectedSVG = '<rect x="90" y="40" width="120" height="120" fill="green" />';
      expect(square.render()).toEqual(expectedSVG);
    });
  });