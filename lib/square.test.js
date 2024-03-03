// Import the Square class
const Square = require('./square');

// Test the render method of the Square class
describe('Square', () => {
  test('render method should return correct SVG string with the specified color', () => {
    const square = new Square();
    square.setColor('green');
    const expectedSVG = '<rect x="10" y="10" width="80" height="80" fill="green" />';
    expect(square.render()).toEqual(expectedSVG);
  });
});