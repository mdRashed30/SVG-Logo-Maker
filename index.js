const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./lib/shapes");

//shapes go here
const shapeClasses = {

}

//inquirer prompt goes here
inquirer
    .prompt([
        {
            type: "input",
            message: "Enter in up to 3 letters for the logo...",
            name: 'text',
            //validation regex function goes here to make sure only 3 char are entered
            validate: function (value) {
            }
        },
        {
            type: "input",
            message: "Enter a color for the text",
            name: "textColor"
        },
        {
            type: "input",
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

        //this is the function that will write to the file system
        makeLogoIntoFile(answers.text, answers.textColor, shape)
    })
    .catch(err => {
        if (err.isTtyError) {
            console.error('Not working because:', err)
        } else {
            console.error('Following reason it why its broken:', err)
        }
    })