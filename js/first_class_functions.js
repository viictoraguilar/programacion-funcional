//First class functions

const suma = function(a, b) {
  return a + b
}

const resultado = suma

console.log(resultado(10,20))

// Segundo ejemplo

const nombre_completo = function(primerNombre, segundoNombre) {
  return primerNombre + segundoNombre
}

const persona = nombre_completo

console.log(persona('Victor ', 'Hugo'))

//Tercer ejemplo
const apellidos_completos = function(primerApellido, segundoApellido) {
  return primerApellido + segundoApellido
}

const apellidos_persona = apellidos_completos

console.log(apellidos_persona('Segundo ', 'Aguilar'))