const multiply = require('./multiply');

describe('multiplication', () => {
    test('3 x 4 should be 12', () => {
        expect(multiply(3,4)).toBe(12);
    });
});