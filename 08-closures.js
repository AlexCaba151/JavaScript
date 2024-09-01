/*Closure: funcion que tiene acceso a varriables de un ambito exterrno, 
incluso despues de que esa funcion haya terminado de ejecutarse.

Ambito lexico: cada vez que se declara una funcion, 
crea su propio ambito y las variables en ambitos superiores
 */

//Example

function outerFunction(){
    let outerVariable = "I am from outer function"

    function innterFunction(){
        console.log(outerVariable)
    }

    return innterFunction
}
const ClosureExample = outerFunction ()
ClosureExample()

function createCounter() {
let count = 0;
return function () {
    count++;
    console.log(count);
};
}
const counterA = createCounter();
counterA();
counterA();
const counterB = createCounter();
counterB();
function outer() {
let message = "Hello, ";
function inner(name) {
    console.log(message + name);
}
return inner;
}
const closureA = outer();
const closureB = outer();
closureA("Alice");
closureA("Bob");