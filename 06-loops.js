//Loop: for
/*Nos ayuda a interar elementos que tengan ciertos
objectos iterables, que podamos pasar uno por uno*/ 

//Ejempolo

//for(variable; condicion; incremento){
    //Codigo a ejecutar}


    let list =["eat", "sleep", "code", "repeat"];

    for(let i = 0; i < list.length; i++){
        console.log(list[i])
    }

//Mientras i va pasando por el loop, cada uno de los ciclo va incrementando hasta que llega a 4 y se rompee el ciclo


//for of
/*
El ciclo for... of permite operar sobre un objeto iterable, es posible que en algún 
momento te encuentres con un error del estilo TypeError: 'x' is not iterable, que nos 
indica que la estructura que estamos tratando de utilizar en nuestro ciclo no es iterable, 
es por esto que debemos tener claro lo que hace que un objeto sea iterable.

En esencia, un objeto iterable es aquel que tiene un protocol de iteración definido, los más
comunes que encontramos son los Arrays y las Strings. (En lenguaje técnico si el objeto tiene
un Symbol.iterator, entonces este es iterable)

OJO 👀 lo que llamamos comunmente en JS como objetos, esas variables que tienen una estructura {}, NO 
son iterables, para explorar estos objetos, podemos usar el método for... in el cual vemos en la 
siguiente clase!*/ 

//Ejemplos

let canasta = ["manzana", "pera", "naranja", "uva"]
for (fruta of canasta){
    console.log(fruta)
}

// cuando imprimo en la consola "fruta" lo que estoy llamando es cada elemento de la lista canasta
//ya que basicamenta al inicio al utilizar el of es lo que hice.

// for in --> lo vamos a utilizar sobre objetos que son emnumerables.
//Saber tambien que una objecto es una algo que tiene una propiedad y esa propiedad tiene un valor.


let listaDeCompra = {
    huevos: 10,
    carne: 3,
    pan: 1,
    queso: 2,
    pasta:4
}
for(item in listaDeCompra){
    console.log(item);
}

for(item in listaDeCompra){
    console.log(`${item} : ${listaDeCompra}`);
}

/*While
El loop while ejecuta repetidamente el código mientras la condición que le indiquemos se cumpla (es decir, que  la condición corresponda a true)
🚧 Es por esto que hay que tener mucho cuidado en la definición de nuestra condición, de lo contrario tendremos un loop infinito!
❗ Podemos usar la sentencia continue para saltar a la siguiente iteración de nuestro ciclo while
*/

//Ejemplo:

let contador = 0;
while(contador < 10){
    console.log(contador)
    contador ++
}

/* do while
//Ejemplo 
do {
    //codigo a ejecutar
}
while(condicion)
*/ 

do {
    console.log(contador);
    contador ++;
} while(contador < 10);

//La diferencia ente while y do while es que el primere siempre se priorisa la ejecucion de la condicion y el segundo siempre se valida la ejecucion del codigo antes de la condicion.




