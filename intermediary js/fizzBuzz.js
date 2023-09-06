var fizz = [];
var qtd = 0;

function buzz(qtd) {
  if (qtd % 3 === 0 && qtd % 5 === 0) {
    console.log("fizzbuzz");
    fizz.push("fizzbuzz");
  } else if (qtd % 5 === 0) {
    console.log("Buzz");
    fizz.push("Buzz");
  } else if (qtd % 3 === 0) {
    console.log("fizz");
    fizz.push("fizz");
  } else console.log(qtd);
  fizz.push(qtd);
}
for (var i = 0; i < 100; i++) {
  qtd++;
  buzz(qtd);
}

console.log(fizz);
