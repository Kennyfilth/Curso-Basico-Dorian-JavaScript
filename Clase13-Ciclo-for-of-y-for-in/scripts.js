/*  Determinados

    bucle for

    Su sintaxis se compone de 3 partes 
        Iniciacion de variable
        Número de vueltas
        Incremento o decremento

    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
    */

let numbers = [56, 14, 23, 37, 41, 50]

// for(let i=0; i<=10;i++){
//      console.log(i);
//  }

for(let i=0; i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`)
}


/*  Determinados

    Bucle for of / for in

    for(let variable de estructura){
        Código a ejecutar
    }

    Palabras reservadas de bucles

        break - rompe el bucle
        continue - se salta la(s) posicion(es) que le indiquemos
        y luego continua su ejecución
*/

let names = ['Paco','jose','Paula','Maria']

for(let name of names){
    if(name==='Paula'){
        continue
    }
    console.log(name)
}

for(let index in names){
    if(names[index]==='Paula'){
        continue
    }
    console.log(index);
}
