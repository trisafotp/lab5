var tempFahr=prompt('Please enter the temperature in degrees Fahrenheit that you wish to convert into degrees Celsius.');
var screenedTempF= isNaN(tempFahr);

if (screenedTempF===false) {
  console.log(tempFahr +' degrees Fahrenheit is equal to '+ (tempFahr-32)*(5/9) + ' degrees Celsius.');
} else {
  console.log('Please re-enter your temperature in degrees Fahrenheit using only numbers.')
}

var tempCels=prompt('Please enter the temperature in degrees Celsius that you wish to convert into degrees Fahrenheit.');
var screenedTempC= isNaN(tempCels);

if (screenedTempC===false) {
  console.log(tempCels +' degrees Celsius is equal to '+ ((tempCels)*(9/5)+32) + ' degrees Fahrenheit.');
} else {
  console.log('Please re-enter your temperature in degrees Celsius using only numbers.')
}
