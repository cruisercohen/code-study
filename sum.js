const sum = {
    asyncSum : async function(a, b) {
        if(isNaN(a) || isNaN(b)) {
            throw new Error();
        }
        return a + b;
    },

    sum : function(a, b) {
        if(isNaN(a) || isNaN(b)) {
            throw new Error();
        }
        return a + b;
    }
}
module.exports = sum;