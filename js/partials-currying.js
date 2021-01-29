//Curring divir una funcion
const suma = (a,b,c) => a + b + c

// const parcial = a => (b,c) => suma(a,b,c)

// const primerNumero = parcial(5)
// const resultado = primerNumero(4,3)
// console.log(resultado)

const parcial = a => b => c => suma(a,b,c)

// const primerNumero = parcial(5)
// const segundoNumero = primerNumero(4)
// const resultado = segundoNumero(3)

const resultadoParcial = parcial(5)(4)(3)

console.log(resultadoParcial)

const lista = (n1,n2,n3) => `Los numeros son ${n1}, ${n2} y ${n3}`

const listaNombres = n1 => n2 => n3 => lista(n1,n2,n3)

const lalista = listaNombres('Victor')('Hugo')('Segundo')

console.log(lalista)