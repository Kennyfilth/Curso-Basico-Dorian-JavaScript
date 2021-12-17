/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arrays u objetos
*/

const person = {
    name: 'Dorian',
    age: 20,
    email: 'dorian@gmail.com'
}

//FORMA TRADICIONAL

// const name = person.name
// const age = person.age
// const email = person.email

// DESTRUCTURING

// const {name: nombre, age: edad, email} = person
// const {name, age, email} = person

// console.log(name, age, email)
// console.log(nombre, edad, email)


// const numbers = [1, 2, 3, 4]

// const [primeraPosicion] = numbers

// console.log(primeraPosicion);

const printPerson = ({name}) => {
    console.log(name)
}

printPerson(person)

const getUsers = async () => {
    const {data:users} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)

}

getUsers()
