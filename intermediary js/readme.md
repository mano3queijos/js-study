# Arrays

> Basic forEach()

```js
names.forEach(function (name) {
  console.log(name);
});
```

> map()

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
