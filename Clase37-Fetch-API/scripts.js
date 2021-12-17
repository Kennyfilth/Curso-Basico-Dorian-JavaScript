/*                                            Fetch API

Proporciona una interfaz Javascript para acceder y manipular partes del canal HTTP, como 
peticiones y respuestas.

Tambien provee un metodo global fetch() que proporciona una forma facil y logica de obtener
recursos de forma asincrona de la red

Está basado en promesas por lo cual tiene un response y un reject internos
    Response tiene varios métodos 
    - arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita
    manipular el contenido del archivo
    
    - bloop(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita
    manipular el contenido del archivo
    
    - clone(): Crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero 
    almacenado en una variable diferente 
    
    - formData(): Se utiliza para leer los objetos formData
    
    - json(): Convierte los archivos json en un objeto de Javascript
    
    - text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8 */

    // - Comprobacion de soporte Fetch

    // if (window.fetch != undefined) console.log('FETCH OK')
    // else console.log("FETCH DOESN'T WORKS")



const button = document.getElementById('button')

button.addEventListener('click',() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name} `
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })

})