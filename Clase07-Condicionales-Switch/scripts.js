/* Sintaxis Simple 

switch(evaluacion) {
    case n:
        // codigo
        break;
    case n2:
        // codigo
        break;
    default:
        // codigo
}
*/


/* Sintaxis Multiple:

switch(evaluacion) {
    case n:
    case n2:
    case n3:
    case n4:
        // codigo
        brak;
    case n5:
    case n6:
        // codigo
        break;
        
    default:
        // codigo
}
*/

/* Sintaxis Simple*/

let num = 3;

switch(num) {
    case 1: console.log(`${num} tiene el valor 1`);
    break;
    case 2: console.log(`${num} tiene el valor 2`);
    break;
    default: console.log(`${num} no vale ni 1 ni 2`);
}

/* Sintaxis Multiple*/

switch(num) {
    case 1:
    case 3:
    case 5:
     console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    console.log(`${num} es par`);
    break;
    default:
    console.log(`${num} no está contemplado en los casos`);   
}
