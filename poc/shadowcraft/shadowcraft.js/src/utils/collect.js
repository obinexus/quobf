
/**
 * Collect a string in an array without prefixes.
 *
 * @param {string} code - The input string to be collected.
 * @param {object} options - Options for collection (not currently used).
 * @returns {string[]} - An array containing the collected string.
 */
function collect(code, options) {
    var chunkSizes = {
        hex: 8,
        bin: 2,
        octal: 4
    };

    // Get the format based on options.type or default to hex
    const format = options && options.type ? options.type : 'hex';

    // Adjust the chunk size based on the selected format
    const chunkSize = chunkSizes[format] || chunkSizes.hex;

    // Check if the chunk is truncated and remove the prefix
    const chunks = code.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];
    const collection = chunks.map((chunk) => {
        // Remove the prefix if it exists
        const withoutPrefix = chunk.replace(/_0x|_0o|_0b/, '');
        return withoutPrefix;
    });
    
    return { collection, format };
}


module.exports = collect;