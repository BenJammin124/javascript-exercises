let rounded = dec => {
  dec = Math.round(dec * 10) / 10
  return dec;
}


const convertToCelsius = function (x) {

  x = (x - 32) * 5 / 9;
  x = rounded(x)
  return x;
};



const convertToFahrenheit = function (y) {
  y = (y * 9 / 5 + 32)
  y = rounded(y);
  return y
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
