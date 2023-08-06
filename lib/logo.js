const fs = require('fs');

const writeLogoToFile = (text, textColor, shape) => {

    const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="111" font-size="22" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;

    fs.writeFile('logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
};

module.exports = { writeLogoToFile };