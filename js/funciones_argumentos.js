//Funciones como argumentos
const suma = (a, b) => a + b
const multiplicar = (a, b) => a * b

const sumarOMultiplicar = fn => fn(10,20)

console.log(sumarOMultiplicar(suma))
console.log(sumarOMultiplicar(multiplicar))

//Ejemplo 2
const nombreMascota = mascota => `La mascota se llama ${mascota}`

const imprimirNombreMascota = fn => nombreMascota('Canela')

console.log(imprimirNombreMascota(nombreMascota))

//Ejemplo 3
let total = 500
const auto = costo => total - costo
const comprarAuto = descontar => descontar(total - 200)
console.log(comprarAuto(auto))




