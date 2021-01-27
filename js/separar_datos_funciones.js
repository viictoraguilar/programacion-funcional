const comidas = [
  {nombre: 'Tacos al pastor', precio: 3},
  {nombre: 'Pozole Rojo', precio: 40},
  {nombre: 'Hamburguesas', precio: 50},
  {nombre: 'Pizza', precio: 80},
  {nombre: 'Quesadillas', precio: 20},
  {nombre: 'Pay de limón', precio: 15},
]

// const resultado = comidas.filter(platillo => platillo.precio > 40)

// console.log(resultado)

const mayor40 = platillo => platillo.precio > 40

const resultado = comidas.filter(mayor40)
console.log(comidas)
console.log(resultado)

const colores = [
  {nombre: 'Azul', id: 1},
  {nombre: 'Rojo', id: 2},
  {nombre: 'Verde', id: 3},
  {nombre: 'Naranja', id: 4},
  {nombre: 'Amarillo', id: 5}
]

const azul = color => color.id === 1

const colorAzul = colores.filter(azul)
console.log(colorAzul)