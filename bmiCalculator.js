const readlineSync = require("readline-sync");

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  console.log("Your bmi is: " + bmi.toFixed(2)); // Exibir com duas casas decimais
}

function askForBmi() {
  var weight = parseFloat(readlineSync.question("Hi, how is your weight: "));
  var height = parseFloat(readlineSync.question("Hi, how is your height: "));

  bmiCalculator(weight, height);
}

askForBmi();
