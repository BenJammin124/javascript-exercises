const add = function (x, y) {
  let result = x + y;
  return result;
};

const subtract = function (x, y) {
  let result = x - y;
  return result;
};

const sum = function (arr) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function (arr) {
  let result = arr.reduce((sum, current) => sum * current);
  return result
};

const power = function (x, y) {
  let result = x ** y;
  return result;
};

const factorial = function (x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
