
/**
 * Generates pseudorandom numbers using a Linear Congruential Generator (LCG).
 *
 * @generator
 * @function
 * @param {number} seed - The seed value for the LCG.
 * @param {number} a - The multiplier for the LCG formula.
 * @param {number} c - The increment for the LCG formula.
 * @param {number} m - The modulus for the LCG formula.
 * @yields {number} The next pseudorandom number in the sequence.
 * @example
 * // Usage example:
 * const lcgInstance = lcg(123, 1664525, 1013904223, Math.pow(2, 32));
 * const randomNumber = lcgInstance.next().value;
 * console.log(randomNumber);
 */
function* lcg(seed, a, c, m) {
    let state = seed;
    while (true) {
        state = (a * state + c) % m;
        yield state;
    }
}

exports.lcg = lcg;

/**
 * Transformation function for mathematical invariance.
 * XOR each character in the string with a pseudorandom value from LCG.
 *
 * @param {string} data - The input string to be transformed.
 * @param {object} lcg - The LCG generator object.
 * @returns {string} - The transformed string.
 */
function transform(data, lcg) {
    // Convert the input string to an array of characters
    const dataArray = [...data];

    // XOR each character with a pseudorandom value from LCG
    const transformedArray = dataArray.map((char) => {
        const randomValue = lcg.next().value;
        const xoredChar = String.fromCharCode(char.charCodeAt(0) ^ randomValue);
        return xoredChar;
    });

    // Join the transformed characters back into a string
    const transformedString = transformedArray.join('');
    return transformedString;
}

exports.transform= transform;
