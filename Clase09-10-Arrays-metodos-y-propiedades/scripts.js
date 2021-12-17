/* ARRAYS
-Son estructuras que nos permiten almacenar varios datos y agruparlos
-Se pueden llenar con cualquier tipo de dato en Javascript y deben
ir separador por coma 
-Se declaran con llaves cuadradas o corchetes []
-Pueden declararse vacios o con un contenido ya establecido
-Pueden añadirse o eliminarse elementos en el momento que queramos

    let array = [] // Array vacío
    let numeros = [1,2,3,4,5] // Array con contenido inicial
    */

let numeros = [1,2,3,4,5,];

let palabras = ['hola','estamos','en', 'Youtube'];

let booleans = [true, true, false];

console.log(numeros[0]);

console.log(numeros[1] + numeros[2]);

console.log(palabras[1]);

console.log(`La palabra "${palabras[1]}" tiene mas de ${palabras[1].length} letras`);

let numbers = [1,2,3,4,5,1];

/* Arrays - propiedad 
    .length - Devuelve el numero de posiciones que contiene el array */

console.log(numbers.length);

/* Arrays - Metodos
    Array.isArray(variable a evaluar) - Devuelve true si la variable es un array */

let number = 4;
console.log(Array.isArray(number)); // Resultado es false porq number no es un array
console.log(Array.isArray(numbers)); // Resultado es true porq numbers si es un array

    /* Eliminar un elemento
        .shift() - Elimina el primer elemento del array y devuelve ese elemento.
        .pop() - Elimina el ultimo elemento de un array y devuelve ese elemento. */

// console.log(numbers);
// numbers.shift();
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

    /* Añadir elementos
        .push(element1, element2,...) - Añade uno o mas elementos al final del array 
        y devuelve la nueva longitud.

        .unshift(element1, element2,...) - Añade uno o mas elementos al comienzo del array 
        y devuelve la nueva longitud. */

// numbers.push(6);
// console.log(numbers);

// let newLength2 = numbers.unshift(0);
// console.log(numbers);


/*      .indexOf() - Devuelve el primer indice del elemento que coincida con 
        el valor especificado, o -1 si ninguno es encontrado */

console.log(numbers);
console.log(numbers.indexOf(4));


/*       .lastIndexOf() - Devuelve el ultimo indice del elemento que coincida con 
        el valor especificado, o -1 si ninguno es encontrado*/


console.log(numbers);
console.log(numbers.lastIndexOf(1));


/*       .reverse() - Invierte el orden de los elementos del array */

// console.log(numbers);
// numbers.reverse()
// console.log(numbers);


/*      .join(separador) - Devuelve un string con el separador que indiquemos,
por defecto son comas  */

// console.log(numbers);
// let arrayString = numbers.join('#');
// console.log(arrayString);


/*      .splice(a, b, items) - Cambia el contenido de un array eliminando
        elementos existentes y/o agregando nuevos elementos
            a - Indice de inicio
            b - Numero de elementos (parametro opcional)
            items - elementos a añadir en el caso de que se añadan (parametro opcional) */

console.log(numbers);
// numbers.splice(3) - Elimina desde la posicion 3 hasta el final
//  numbers.splice(2,2) - Elimina desde la posicion 2 el número de valores que le indiquemos
// numbers.splice(2,2,10,23,54) - si b es un valor distinto de 0 elimina
// el  numero de valores que le indiquemos en b y añade los valores de items a partir de la posicion a

console.log(numbers);

/*      .slice(a,b) - extrae elementos de un array desde el indice a hasta el 
indice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original */

let newNumbers = numbers.slice();
console.log(numbers);
console.log(newNumbers);

let newNumbers = numbers.slice(2);
console.log(numbers);
console.log(newNumbers);

let newNumbers = numbers.slice(2,4);
console.log(numbers);
console.log(newNumbers);
