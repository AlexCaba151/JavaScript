//Los tipos de datos son los datos en los que se fundamentan nuesta interaccion con el lenguaje.

// String (Cadena de texto)
let myName = 'Yerlin'
let alis = 'Alexander'
let email ='yerlin.alec21@gmail.com'

//Numbers(numeros)
let age = 27 // entero
let height = 1.80 // decimal

//Booleans(Buleanos)
/*Estructuras de control para saber si algo el falso o verdadero(False or True) */
let isTeacher = true
let isStudent = false

//Undefined
let UndefinedValue //significa que la variable la hemos declarado pero no le hemos asigando un valor
console.log(UndefinedValue)


//Null
let nullValue = null //Representa que queremos indidcar que ese valor es nulo(de manera intencionada)

//Symbol
let mySymbol = Symbol("mysymbol") //Representan valores unicos que puedes ser utilizados como identificadores de propiedades para los objectos(para evitar coliciones entre otras propiedades)

//BigInt(Un gran entero)
let myBigInt = BigInt(948374908374908304983094803984039840398408039480398)

//Mostras los tipos de datos

console.log(typeof myName)
console.log(typeof age)
console.log(typeof isStudent)

/* Operadores logicos */
//&& => Y
// || => o
// ! => not

const a = 10;
const b = 20;
const c = 20;

a  == b && a ===b
//salida => false

a != b || a === c
//salida => true

!(a === c)
//Salida  => true
