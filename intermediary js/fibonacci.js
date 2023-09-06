var readlineSync = require("readline-sync");

function fibonacciGenerator(n) {
  var a = 0,
    b = 1,
    c = 0;
  var arrayFib = new Array(n);
  for (var i = 0; i <= n; i++) {
    arrayFib.push(a);

    c = a + b;
    b = a;
    a = c;
  }

  return arrayFib;
}
var n = readlineSync.question();

fibonacciGenerator(n).forEach(function (numbers) {
  console.log(numbers);
});
