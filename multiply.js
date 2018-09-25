const multiply = function(a, b) {
    if (a === 1) {
        return b;
    }
    return b + multiply(a - 1, b);
};

module.exports = multiply;