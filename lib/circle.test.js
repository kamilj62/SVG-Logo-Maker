// Import the Circle class
const Circle = require('./circle');

// Test the render method of the Circle class
describe('Circle', () => {
  test('render method should return correct SVG string with the specified color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const expectedSVG = '<circle cx="50" cy="50" r="40" fill="red" />';
    expect(circle.render()).toEqual(expectedSVG);
  });
});