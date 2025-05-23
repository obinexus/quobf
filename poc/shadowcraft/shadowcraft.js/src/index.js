const {truncate,untruncate} =require("./utils/cast");
const Enum =require("./utils/Enum");
const {lcg,transform} = require("./utils/transformer");

// Initial input
let input ='var pi = 3.14;';

// Seed and parameters for the LCG
const lcgSeed = 123;
const lcgMultiplier = 1664525;
const lcgIncrement = 1013904223;
const lcgModulus = Math.pow(2, 32);

// Create an instance of the LCG generator
const lcgInstance = lcg(lcgSeed, lcgMultiplier, lcgIncrement, lcgModulus);

// Transform the input using the LCG and the transform function
const transformedCode = transform(input, lcgInstance);

// Truncate the transformed code with a specified type (e.g., hex)
const truncatedCode = truncate(transformedCode, { type: 'hex' });

// Untruncate the truncated code to get the original transformed code
const untruncatedCode = untruncate(truncatedCode, { type: 'hex' });

// Display the results
console.log('Original Input:');
console.log(input);
console.log('\nTransformed Code:');
console.log(transformedCode);
console.log('\nTruncated Code:');
console.log(truncatedCode);
console.log('\nUntruncated Code:');
console.log(untruncatedCode);
