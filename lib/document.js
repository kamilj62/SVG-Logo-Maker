const index = require('../index');
//const circle = require('./circle');
//const square = require('./square');
//const triangle = require('./triangle');

function shapes(data) {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
<desc>${data.shape.render()}</desc>

  <text>
   
    <tspan font-weight="bold" fill=${data.shape/color}>${data.text}</tspan>
  </text>

 
</svg>`
}

module.exports = { shapes };