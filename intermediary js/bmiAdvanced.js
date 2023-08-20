const readlineSync = require("readline-sync");

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);

  var interpretation =
    "Your BMI is: " + Math.round(bmi) + " " + messageBmi(Math.round(bmi));
  console.log(
    "Your bmi is: " + Math.round(bmi) + " " + messageBmi(Math.round(bmi))
  ); // Exibir com duas casas decimais
}

function askForBmi() {
  var weight = parseFloat(readlineSync.question("Hi, how is your weight: "));
  var height = parseFloat(readlineSync.question("Hi, how is your height: "));

  bmiCalculator(weight, height);
}

function messageBmi(bmiValue) {
  if (bmiValue < 18.5) {
    return "Looks like you're underweight. You should consider eating more.";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    return "Good, just try not to be so sedentary.";
  } else {
    return "So you are overweight. Consider going to the gym.";
  }
}

askForBmi();
