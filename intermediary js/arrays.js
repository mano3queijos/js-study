var list = ["Emanuel", "woepweo[j", "ewrlppweoj", "pweokfeqwojf"];

list.forEach(function (name) {
  console.log(name);
});

var numbers = [1, 2, 3];
var double = numbers.map(function (numbers) {
  return numbers * 2;
});
console.log(double);
console.log(numbers);

var students = [
  { name: "Emanuel", age: 15 },
  { name: "joão", age: 55 },
  { name: "jubiskraudo", age: 9000 },
];

var wantedStudent = students.filter(function (students) {
  return students.age >= 18;
});

console.log(wantedStudent);

var persons = [
  { name: "Emanuel", age: 15 },
  { name: "joão", age: 55 },
  { name: "jubiskraudo", age: 9000 },
];

var wantedPerson = persons.find(function (person) {
  return person.name == "Emanuel";
});

console.log(wantedPerson);

var movies = [
  { name: "10 coisas que eu odeio em você", category: "romance" },
  { name: "Velozes e Furiosos", category: "action" },
  { name: "Os mercenários", category: "action" },
  { name: "Triplo X", category: "action" },
];
var allMovies = movies.every(function (movie) {
  return movie.category === "action";
});
console.log(allMovies);

var anyMovies = [
  { nome: "10 coisas que eu odeio em você", category: "romance" },
  { nome: "Velozes e Furiosos", category: "action" },
  { nome: "Harry Poter", category: "adventure" },
  { nome: "Simpsons", category: "anime" },
  { nome: "Os mercenários", category: "action" },
  { nome: "The walking dead", category: "horror" },
  { nome: "Triplo X", category: "action" },
];

var someActionMovie = anyMovies.some(function (filme) {
  return filme.category === "action";
});

console.log("have some action movie?: ", someActionMovie);

var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function (somaAux, number) {
  return somaAux + number;
}, 0);

console.log(sum);
