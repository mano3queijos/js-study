const readlineSync = require("readline-sync");

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  console.log("Your bmi is: " + Math.round(bmi)); // Exibir com duas casas decimais
}

function askForBmi() {
  var weight = parseFloat(readlineSync.question("Hi, how is your weight: "));
  var height = parseFloat(readlineSync.question("Hi, how is your height: "));

  bmiCalculator(weight, height);
}

askForBmi();
