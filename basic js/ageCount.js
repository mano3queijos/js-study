const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
timeLeft();
function timeLeft() {
  rl.question("inform your age: ", (age) => {
    console.log(
      "if you live until 90 years old, you have: " +
        lifeInYear(90 - age) +
        " Days" +
        ", " +
        lifeInWeek(90 - age) +
        " weeks" +
        ", and " +
        lifeInMonth(90 - age) +
        " months left"
    );
  });
}
function lifeInWeek(remainingAge) {
  return remainingAge * 52;
}
function lifeInMonth(remainingAge) {
  return remainingAge * 12;
}
function lifeInYear(remainingAge) {
  return remainingAge * 365;
}
