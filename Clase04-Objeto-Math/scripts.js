/* Objeto Math*/

/* Es un objeto estatico... Tenemos que usar su nombre para utilizarlo*/


/* Propiedades:
    Math.E - Math.Pi */

    console.log(Math.E);
    console.log(Math.PI);

/* Métodos:
    Math.abs(x) Devuelve el valor absoluto de x
    Math.ceil(x) Devuelve el entero mas grande mayor o igual que un numero
    Math.floor(x) Devuelve el entero mas pequeño menor o igual que un numero
    Math.sqrt(x) Devuelve la raiz cuadrada de x
    Math.pow(x, y) Devuelve la potenci de x elevado a y
    Math.random() Genera un numero pseudoaleatorio entre 0 y 1
    Math.round(x) Devuelve el valor de un numero redondeado al entero mas cercano
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero */

let num = 5;
let num2 = 5.3;

console.log(Math.abs(num));

console.log(Math.ceil(num2));

console.log(Math.floor(num2));

console.log(Math.pow(2, 3));

console.log(Math.random());

/* Para generar un numero aleatorio entre 0 y 100 ejemplo*/
console.log(Math.round(Math.random()* 100));

/* Formula para generar un numero entre un minimo y un maximo

console.log(Math.round(Math.random() * (max - min) + min));*/

console.log(Math.round(Math.random() * (100 - 50) + 50));

console.log(Math.sign(0));  // Devuelve o -1 / 0 / 1

console.log(Math.sqrt(9));


