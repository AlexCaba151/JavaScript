/*Un objecto es una estructura que tiene atributos  y metodos */
//Creacion de un objecto en JavaScript

const car = {
    color: "Red",
    brand: "Honda",
    model: "Civic Type R"

}

const person = {
    name: "John",
    age: "28",
    job:"Doctor",

    saludar(){
        console.log(`Hola, mi nombre es ${person.name}`)
    },
}
console.log(person)