const comidas = [
  {nombre: 'Tacos al pastor', precio: 3},
  {nombre: 'Pozole Rojo', precio: 40},
  {nombre: 'Hamburguesas', precio: 50},
  {nombre: 'Pizza', precio: 80},
  {nombre: 'Quesadillas', precio: 20},
  {nombre: 'Pay de limón', precio: 15},
]

const obtenerNombres = producto => producto.nombre

const resultado = comidas.map(obtenerNombres)
console.log(resultado)
console.log(comidas)