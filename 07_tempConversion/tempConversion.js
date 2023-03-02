const convertToCelsius = function (fahrenheit) {
  // let celsius = (fahrenheit - 32) * (5/9);
  // let round = Math.round(celsius * 10) / 10;
  // return round;  Passed 4 test
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  // let fahrenheit = (celsius * 5)/9 + 32;
  // let rounded = Math.round(fahrenheit * 10) / 10;
  // return rounded; passed 4 test
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
