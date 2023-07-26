const Shape = require('./shapesColor.js')

//Make the classes for each shape
class Triangle extends Shape {
    render() {
        return `<polygon points="10,200 150,10 290, 200" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}"`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill=${this.color}"/>`
    }
}

//Exporting the classes in an object
module.exports = { Triangle, Circle, Square }