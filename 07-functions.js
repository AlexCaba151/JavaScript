/*Functions  --> funciones */

/*Una función es un conjunto de instrucciones tareas que realiza una 
tarea o asigna un valor, también se puede definir como un conjunto de 
instrucciones que realiza una tarea o calcula un valor

Una definición de función (también denominada declaración de función 
o expresión de función) consta de la palabra clave function, seguida de:

-> El nombre de la función.
-> Una lista de parámetros de la función, entre paréntesis y separados por comas.
-> Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.
*/

//Ejemplo de funcion

/* 
function suma (a,b){
return a + b}

suma (3,5)

*/

function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const prriceWithDiscount = price - discount
    return prriceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage )
console.log("Original Price: $" + originalPrice)
console.log ("Discount:" + discountPercentage + "%")
console.log("Price with discount: $" + finalPrice)

/*
Las funciones pueden realizar tareas y calcular valores y para calificar como función debe tomar alguna entrada y devolver una salida.

Un método es una función asociada a un objeto específico.

Los métodos están ligados a un objeto y se llaman en el contexto de ese objeto.

por lo tanto, un método es esencialmente una función que opera sobre propiedades o comportamientos de un objeto.

*/

//Ejemplo de metodo:

const car = {
    name: "Honda Civic Type R",
    soundCar: function soundCar(){
        console.log("Brum! Brum!!")
    }
}

car.soundCar()
//Estructura de un metodo


/*Arrow function*/

const functionalCharacter ={
    name: "Uncle ben",
    messangeWithTradicionalFunction: function(message){
        console.log(`${this.name} say: ${message}`)
    },
    messangeWithTradicionalFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

functionalCharacter.messangeWithTradicionalFunction("With a great power, comes a great responsability")
functionalCharacter.messangeWithTradicionalFunction("Beware of Doctor octopus")

/*
Las Arrow Function son útiles porque permiten:

=> Escribir métodos más concisos
=> Simplificar una línea de código para que sea más legible.
=> Aprovechar las características de retorno implícito y el no uso de paréntesis.
=> Olvidarse de manejar el contexto this.
=> Definir de manera compacta una función convencional.
=> Eliminar las llaves y la palabra return si la función tiene solamente una sentencia que devuelve un valor.
=> Reducir el código aún más utilizando parámetros 
*/