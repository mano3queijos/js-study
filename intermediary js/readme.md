# Arrays

> Basic forEach()

```js
names.forEach(function (name) {
  console.log(name);
});
```

> ## map()

O map() retorna um novo array. Em cada valor armazenado no primeiro array, é realizado a iteração, retornado um novo dado, e guardado em um segundo array.

Para que este entendimento seja o mais claro possível, a seguir temos um exemplo de como funciona esta função:

```js
var numeros = [1, 2, 3];

var dobro = numeros.map(function (numero) {
  return numero * 2;
});
console.log(dobro);
console.log(numeros);
```

> ## filter()

O filter() sempre retornará um valor booleano. Se o valor for verdadeiro, o valor entra no array, se acaso for negativo, não entra no segundo array.

Pense na seguinte situação: existe uma lista de alunos e suas idades. Nestes dados, é preciso retornar somente os alunos que forem menores de idade:

```js
var alunos = [
  { nome: "joão", idade: 15 },
  { nome: "josé", idade: 18 },
  { nome: "maria", idade: 20 },
  { nome: "tulio", idade: 17 },
];

var alunosDeMaior = alunos.filter(function (aluno) {
  return aluno.idade >= 18;
});
console.log(alunosDeMaior);
```

> ## find()

Como o nome mesmo intui, esta função tem como objetivo encontrar o registro. O find() guarda o valor na variável especificada. Porém, ele serve somente para encontrar apenas um registro de dentro do array. Então, caso exista o risco de voltar mais de um registro, deve ser utilizado outro método ou deverá existir uma condição que bata apenas com um registro, pois o find() sempre vai voltar apenas a primeira ocorrência.

```js
var persons = [
  { name: "Emanuel", age: 15 },
  { name: "joão", age: 55 },
  { name: "jubiskraudo", age: 9000 },
];

var wantedPerson = persons.find(function (person) {
  return person.name == "Emanuel";
});

console.log(wantedPerson);
```

> ## every()

O every(), ao invés de retornar um array, retorna um valor booleano.

```js
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
```

> ## some()

Ele valida se existe algum valor dentro do array, que respeite o critério estabelecido na função.

```js
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
```

> # reduce()

O reduce() é utilizado quando for necessário pegar os valores do array e condensar eles em um único valor.

O exemplo a seguir, demonstra com mais exatidão o intuito do método reduce( ):

```js
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function (somaAux, number) {
  return somaAux + number;
}, 0);
```
