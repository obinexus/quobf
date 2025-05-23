const fs = require('fs');
const { truncate } = require('../utils/cast'); // Assuming you have these functions in a file named 'cast.js'
const collect = require("../utils/collect");

// Check if a file path is provided as a command-line argument
if (process.argv.length < 3) {
    console.error('Usage: node script.js <file_path>');
    process.exit(1);
}

const filePath = process.argv[2];

// Read the content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    }
    
    // Truncate the data
    const truncatedData = truncate(data, { type: 'hex' });

    // Collect the truncated data
    const collectedArray = collect(truncatedData, { type: 'hex' });

    console.log('Truncated Data:', truncatedData);
    console.log('Collected Data:', collectedArray);
});
