class Shape {
    constructor() {
        this.color = ''
    }

    setColor(color) {
        this.color = color
    }
}

//Export the shape class to be picked up elsewhere.
module.exports = Shape