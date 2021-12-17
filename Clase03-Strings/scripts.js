/*PROPIEDADES

length -> Devuelve la longitud de la cadena */

let cadena = "Hola Mundo"

console.log(cadena.length);

/* METODOS

Todos los metodos devuelven una cadena nueva, la cadena original 
no será modificada.

toUpperCase() -> Devuelve la cadena a Mayusculas */

console.log(cadena.toUpperCase());

let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);

/* toLowerCase() -> Devuelve la cadena a minuscula */

console.log(cadena.toLowerCase());

let cadenaMinus = cadena.toLowerCase();
console.log(cadenaMinus);

/* indexOf(parametroString) -> Devuelve la posicion en la q se encuentra el String,
sino lo encuentra devuelve -1*/

console.log(cadena.indexOf("Hola"));

/* replace(valor a buscar, valor nuevo) -> Reemplaza el fragmento de la cadena que le digamos y pone el valor nuevo*/

console.log(cadena.replace("Mundo", "Youtube"));

/* substring(inicio [,fin]) -> Extrae los caracteres desde el inicio 
hasta el fin (el final no se incluye)

Sino se incluye el fin extrae hasta el final*/

console.log(cadena.substring(2));
console.log(cadena.substring(2,9));

/*slice(inicio [,fin]) -> Igual que substring pero admite valores negativos,
si ponemos valores negativos empezará desde atras

Sino se incluye el fin extrae hasta el final

    (2, -4) -> Empieza a contar en el tercer caracter y los cuatro ultimos
no los considera*/

console.log(cadena.slice(3));
console.log(cadena.slice(1,-5));

/*trim() -> Elimina los espacios al inicio y al final de la cadena*/

let cadena2 = "     Hola youtube, estamos trabajando con cadenas          ";

console.log(cadena2.trim());

/* ES6 Metodos

starsWith(valor, [,inicio]) -> Sirve para saber si la cadena empieza
con ese valor. Devuelve True o false */

console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
console.log(cadena.startsWith("M", 5));

/* endsWith(valor, [, longitud]) -> Sirve para saber si la cadena termina
con es valor. Devuelve True o false */

console.log(cadena.endsWith("o"));

/* includes(valor, [,inicio]) -> Igual que indexOf pero devuelve 
True o False */

console.log(cadena.includes("n"));
console.log(cadena.includes("a", 5));

/* repeat(valor) -> Repite el string el numero de veces
que le indiquemos */

let cadena3 = "Hola ";
console.log(cadena3.repeat(5));

/* Template Strings */

let nombre = "Juan";
let apellido = "Gomez";
let edad = 20;

/* Con ES5*/

console.log("Hola " + nombre +" " + apellido + " " + "Tienes " + edad + " " + "años");

/* Con ES6 Template Strings*/

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);

console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad+1} años`);











