var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  /******Don't change the code above*******/
  var n = Math.random();
  n = n * names.length;
  n = Math.floor(n) + 1;
  return names[n] + "is going to buy lunch today";
  /******Don't change the code below*******/
}

console.log(whosPaying(names));
