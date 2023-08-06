const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes");
const { writeLogoToFile } = require('./lib/logo');
//shapes go here
const shapeClasses = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
};

//inquirer prompt goes here
inquirer
    .prompt([
        {
            type: "input",
            message: "Enter in up to 3 letters for the logo...",
            name: 'text',
            validate: function (input) {
                if (input.length > 3) {
                    return "Logo text must be only three characters.";
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Enter a color for the text",
            name: "textColor"
        },
        {
            type: "list",
            message: "What shape would you like the text over?",
            name: "shape",
            choices: [Triangle, Circle, Square]
        },
        {
            type: "input",
            message: "What color would you like the shape to be?",
            name: "shapeColor"
        }
    ])
    .then(answers => {
        //this is where the answer goes
        const shape = new shapeClasses[answers.shape]();
        shape.setColor(answers.shapeColor);
        //this is the function that will write to the file system
        writeLogoToFile(answers.text, answers.textColor, shape)
    })
    .catch(err => {
        if (err.isTtyError) {
            console.error('Not working because:', err)
        } else {
            console.error('Following reason it why its broken:', err)
        }
    })