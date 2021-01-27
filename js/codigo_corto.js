const comidas = [
  {nombre: 'Tacos al pastor', precio: 3},
  {nombre: 'Pozole Rojo', precio: 40},
  {nombre: 'Hamburguesas', precio: 50},
  {nombre: 'Pizza', precio: 80},
  {nombre: 'Quesadillas', precio: 20},
  {nombre: 'Pay de limón', precio: 15},
]

const obtenerNombres = c => c.nombre
const resultadoNombres = comidas.map(obtenerNombres)
console.log(resultadoNombres)

const mayor40 = c => c.precio > 40
const resultadoComidas = comidas.filter(mayor40)
console.log(resultadoComidas)
