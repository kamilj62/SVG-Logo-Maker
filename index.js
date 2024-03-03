// Import necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/document');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What is your text?',
    },
    {
        type: 'input',
        name: 'color',
        message: 'What is the color for the text?',
    },
    {
        type: 'list',
        message: "Choose a shape for your project.",
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What is the color of the shape?',
    }
    
];

// Function to write README file
function writeToFile(fileName, data) {
    const svg = shapes.shapes(data);
    let svgString = '';
    let shapeChoice;
        if (data.shape === "Triangle") {
            shapeChoice = new Triangle();
            svgString = `<polygon points="150, 18 244, 182 56, 182" fill="${data.color}"/>`;
        } else if (data.shape === "Square") {
            shapeChoice = new Square();
            svgString = `<rect x="73" y="40" width="160" height="160" fill="${data.color}"/>`;
        } else if (data.shape === 'Circle') {
            shapeChoice = new Circle();
            svgString = `<circle cx="150" cy="115" r="80" fill="${data.color}"/>`;
        }

    fs.writeFile(fileName, svg, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("Generated logo.svg");
    });
}


// TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
            .then((data) => {
                if (data.text.length > 3) {
                    console.log("Must enter a value of no more than 3 characters");
                }
                else{
                    writeToFile('logo.svg', data);
                }
                
            });
    }

// Function call to initialize app
init();
