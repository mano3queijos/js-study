const readline = require('readline');

console.log("oi")

function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9   
console.log("a is " + a);
console.log("b is " + b);

var c=a;
a=b;
b=c;
 console.log("after")
/***********Do not change the code below 👇*******/

console.log("a is " + a);
console.log("b is " + b);
}

test();


// var myName ="Emanuel";
// var myName ="Emanuel";
// var myName ="Emanuel";
// var myName ="Emanuel";
// var masQueCaraio ="camelCase";


var message ="Hello";
var theName ="Emanuel";

var fullMessage = message + " " + theName;

console.log(fullMessage)

console.log(theName.length);

// Cria uma interface de leitura para receber entradas do usuário via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('digitem o seu nome' ,(anwser)=>{
console.log('seu nome: ' + anwser);

rl.close();

});

function test2(){
    var Msg = prompt("writte a mensage");
    var QtdMsg = 10;
    var QtdMsgRest = QtdMsg - Msg.length;

alert(Msg.slice(0, QtdMsg));
alert("you have written: "+ Msg.length + " Characters" + ", You Have: " + QtdMsgRest + " Character left")

}

function uperCase(){
    var name = "Emanuel Santos Almeida";
   

    console.log(name + " upper case: " +  name.toUpperCase()  );
    console.log(name.length);
}
uperCase();

function requestName(){
        // Receive a name and capitalize the first character of the name.

    var name = prompt("What is your name?");
    name = name.toLowerCase();
    alert("hello "+name.slice(0,1).toUpperCase() + (name.slice(1,name.length)));
} 
function dogsAge(){
   var Age = prompt("tell the dogs age")

    alert("The human Age of the dog is: " + ((Age - 2)*4 + 21));}
