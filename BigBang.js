const fs = require('fs'); // Import the 'fs' module to interact with the file system

function generateArray() { // Function to generate the Big Bang array
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            result.push("BIG");
        } else if (i % 5 === 0) {
            result.push("BANG");
        } else if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

const bigBangArray = generateArray();
fs.writeFileSync('output.json', JSON.stringify(bigBangArray, null, 2)); // Write the array to 'output.json' file

console.log('Output has been written in output.json');
