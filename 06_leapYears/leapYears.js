const leapYears = function (year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true
    } else {
        return false
    }
};



// Do not edit below this line
module.exports = leapYears;


console.log(fourYears(1960, 1968))