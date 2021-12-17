/* 
DOM - Crear e insertar elementos

Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('selectDays')

// const itemList = document.createElement('LI')
// itemList.textContent = 'Lunes'

// daysList.appendChild(itemList)

title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>'

const fragment = document.createDocumentFragment()

// for(const day of days) {
//     const itemList = document.createElement('LI')
//    itemList.textContent = day
//    fragment.appendChild(itemList)
// }


for(const day of days) {
    const selecItem = document.createElement('OPTION')
    selecItem.setAttribute('value', day.toLowerCase())
    selecItem.textContent = day
    fragment.appendChild(selecItem)
}

// daysList.appendChild(fragment)
selectDays.appendChild(fragment)

