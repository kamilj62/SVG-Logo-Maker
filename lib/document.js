const index = require('../index.js');

function shapes(data) {
    return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${data.shapeChoice}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.color}">${data.text}</text>
        </svg>`
}

module.exports = { shapes };