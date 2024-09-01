/*
Arrays: Son objectos que contienen multiples datos ordenados, que comienzan desde el indice 0,
conjunos de elemenos que se guardan en una variables.
*/
//example:
//1. Array() or newArray()
const fruits = Array('Apple', 'Banana', 'Orange')
console.log(fruits)

const nuumber = Array(1, 2, 3, 4, 5)
console.log(nuumber)

//2. Array literal syntax

const movies = ['Lord of the rings', 'Unglorius Bastards', 'Zohan']
console.log(movies)

//Accesing arrays
const firstMovie = movies[1]
console.log(firstMovie)

//Mutability
movies.push('Dexter')//Le agrego una propiedad al array, sin modificar el original
console.log(movies)

//Checking arrays with array.isArray()
const isArray = Array.isArray(movies)
console.log(isArray)


//Sumar todos los elementos que tenemos dentro de un array

const numberArray = [1, 2, 3, 4, 5]
let sum =0

for(let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i]
}
console.log(sum)