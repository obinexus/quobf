/**
 * Truncate a string by converting each character to its representation
 * in a specified base (hex, octal, or raw) and applying a specified prefix.
 *
 * @param {string} str - The input string to be truncated.
 * @param {object} options - Options for truncation.
 * @param {string} options.type - The type of truncation ('hex', 'octal', or 'raw').
 * @returns {string} - The truncated string with the specified prefix.
 * @throws Will throw an error if options.type is not provided.
 */
function truncate(str, options) {
    // Validate that options and options.type are provided
    if (!options || !options.type) {
        throw new Error("Expected options.type to be provided.");
    }

    // Define mapping of types to prefixes and bases
    var formats = {
        hex: { prefix: '_0x', base: 16 },
        octal: { prefix: '_0o', base: 8 },
        binary: { prefix: '_0b', base: 2 },
        text: { prefix: '' , base: null }
    };

    // Get the format based on the specified type or default to raw
    const format = formats[options.type] || formats.hex;

    // Convert each character to its representation in the specified base
    let truncated = [...str].map((v) => {
        return v.charCodeAt(0).toString(format.base);
    }).join('');

    // Combine the prefix and the truncated string
    return format.prefix + truncated;
}

var code='';
var truncated= (truncate(code,{type:'octal'}));

console.log(truncated);

// 1) 100% code obsfucation.
// 2) code polymorphic generator.
// 3) 

exports.truncate = truncate;
/**
 * Untruncate a string by converting each substring to its character representation
 * based on the specified base (hex, octal, or binary) and removing the prefix.
 *
 * @param {string} str - The truncated string to be untruncated.
 * @param {object} options - Options for untruncation.
 * @param {string} options.type - The type of untruncation ('hex', 'octal', or 'binary').
 * @returns {string} - The untruncated original string.
 * @throws Will throw an error if options.type is not provided.
 */
/**
 * Untruncate a string by converting each substring to its character representation
 * based on the specified base (hex, octal, or binary) and removing the prefix.
 *
 * @param {string} str - The truncated string to be untruncated.
 * @param {object} options - Options for untruncation.
 * @param {string} options.type - The type of untruncation ('hex', 'octal', or 'binary').
 * @returns {string} - The untruncated original string.
 * @throws Will throw an error if options.type is not provided.
 */
function untruncate(str, options) {
    // Validate that options and options.type are provided
    if (!options || !options.type) {
        throw new Error("Expected options.type to be provided.");
    }

    // Define mapping of types to prefixes and bases for untruncation
    var formats = {
        hex: { prefix: '_0x', base: 16 },
        octal: { prefix: '_0o', base: 8 },
        binary: { prefix: '_0b', base: 2 },
        text: { prefix: '' , base: null }
    };

    // Get the format based on the specified type or default to raw
    const format = formats[options.type] || formats.hex;

    // Remove the prefix from the truncated string
    const withoutPrefix = str.replace(format.prefix, '');

    // Split the string into substrings based on the length of the truncated representation
    const chunkSize = Math.ceil(withoutPrefix.length / format.base);
    const chunks = withoutPrefix.match(new RegExp(`.{1,${chunkSize}}`, 'g'));

    // Convert each substring back to its character representation
    const originalString = chunks.map((chunk) => {
        return String.fromCharCode(parseInt(chunk, format.base));
    }).join('');

    return originalString;
};

exports.untruncate = untruncate;
