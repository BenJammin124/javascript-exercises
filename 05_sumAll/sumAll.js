const sumAll = function (x, y) {
    let sum = 0;
    if (typeof x === 'string' || typeof y === 'string' || y instanceof Array) {
        return 'ERROR' //!Number.isInteger(min) || !Number.isInteger(max) instead
    } else if (x < 0 || y < 0) {
        return 'ERROR'
    } else if (x > y) {
        for (let i = y; i <= x; i++) {
            sum += i;
        }
    } else if (x < y) {
        for (let i = x; i <= y; i++) {
            sum += i;
        }
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
