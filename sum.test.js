// Setup:
// npm install --save-dev jest
// run npx jest --watchAll


//  sum.js file
// const sum = {
//     asyncSum : async function(a, b) {
//         if(isNaN(a) || isNaN(b)) {
//             throw new Error();
//         }
//         return a + b;
//     },

//     sum : function(a, b) {
//         if(isNaN(a) || isNaN(b)) {
//             throw new Error();
//         }
//         return a + b;
//     }
// }
// module.exports = sum;

//  end sum.js file


const sum = require('./sum');

describe('when adding stuff up Asyncronously', () => {
    test('adds 1 + 2 to equal 3', async () => {
        await expect(sum.asyncSum(1, 2)).resolves.toBe(3);
    });
    test('rejects non number', async () => {
        await expect(sum.asyncSum('a', 'b')).rejects.toThrow();
    });
}); 

describe('when adding stuff up', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum.sum(1,2)).toBe(3);
    });
});

describe.each([[1, 2, 3], [2, 4, 6], [3, 1, 4]])('add various numbers', (a, b, result) => {
    test(`adds ${a} + ${b} = ${result}`, () => {
        expect(sum.sum(a, b)).toEqual(result);
    })
});

