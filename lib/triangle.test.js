// Import the Triangle class
const Triangle = require('./triangle');

// Test the render method of the Triangle class
describe('Triangle', () => {
  test('Render method should return correct SVG string with the specified color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    expect(triangle.render()).toEqual(expectedSVG);
  });
});