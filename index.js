// Import necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/document');
const {Circle, Triangle, Square } = require('./lib/shapes');


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

// Function to write file
function writeToFile(fileName, data) {
    let shapeChoice;
        if (data.shape === "Triangle") {
            shapeChoice = new Triangle(data.shapeColor).render(); 
        } else if (data.shape === "Square") {
            shapeChoice = new Square(data.shapeColor).render();
        } else if (data.shape === 'Circle') {
            shapeChoice = new Circle(data.shapeColor).render();
        }
    data.shapeChoice = shapeChoice;
    console.log(shapeChoice);

    const svg = shapes.shapes(data);

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
