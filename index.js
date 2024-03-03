// Import necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/document.js');


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
        choices: ['circle', 'triangle', 'square'],
        name: 'shape'
    },
    {
        type: 'input',
        name: 'shape/color',
        message: 'What is the color of the shape?',
    }
    
];

// Function to write README file
function writeToFile(fileName, data) {
    const svg = shapes(data);
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
                writeToFile('./logo.svg', data);
            });
    }

// Function call to initialize app
init();
