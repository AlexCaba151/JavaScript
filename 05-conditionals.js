/* Condicionales */

//if: Es una sntencia de control de flujo fundamental que permite ejecutar e codigo si se cumple ciertas reglas en forma de condicion.

if (a == b){
    //Bloque de codigo a ejecutar si la condicion es true
} 
else{
    //Bloque de codigo a ejecutar si la condicion es false
}

//Ejemplo de uso

let age = prompt("How old are you?")
if(age > 18){
    console.log("You are an ADULT")
}
else{
    console.log("You are a child .i.")
}

//switch
/*Es similar en la logica al if, else, else if. Este
metodo se crea diferentes escenarios para generar una validacion.*/

//ejemplo:
switch(expresion){
    case valor1:
    // Codigo a ejecutar
    break;
    case valor2:
    //codigo a ejecutar
    break;
    default:
    // Codigo
}

//buscar producto en una tienda

let expr ="Papayas"
switch (expr){
    case "Naranja":
    console.log("Las naranjas cuestan $20 el kilo")
    break;
    case "Manzanas":
        console.log("Las manzanas cuestan $40 el  kilo")
    break;
    case "platanos":
        console.log("Los platanos cuestan $20 la unidad")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $35 el kilo")
        break;
    default:
        console.log(`Lo sentimos, no contamos con ${expr}`);

}