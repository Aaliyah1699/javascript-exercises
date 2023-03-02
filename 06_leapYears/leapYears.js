// use an `if` statement and `&&` to make sure all the conditions are met properly
// divisible by 4, NOT 100 unless divisible by 400
const leapYears = function (year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
