const Shape = require('./shapesColor.js')

//Make the classes for each shape
class Triangle extends Shape {
    render() {
        return `<polygon points="10,200 150,10 290, 200" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};


class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill=${this.color}"/>`
    }
}

//Exporting the classes in an object
module.exports = { Triangle, Circle, Square }