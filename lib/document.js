const index = require('../index.js');

function shapes(data) {
    return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <text ${data.shapeChoice}>${data.text}</text>

        </svg>`
}

module.exports = { shapes };