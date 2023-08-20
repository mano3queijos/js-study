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

//other version: /*

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi); // Exibir com duas casas decimais
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
