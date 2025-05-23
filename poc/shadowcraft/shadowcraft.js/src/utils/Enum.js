function Enum(...args) {
    const result = {};
    for (let i = 0; i < args.length; i++) {
        const value = args[i];
        result[value] = i;
    }

    Object.freeze(result);
    return result;
}

module.exports = Enum;