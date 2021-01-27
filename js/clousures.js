const obtenerPersona = () => {
  const nombre = 'Victor'

  function mostrarNombre() {
    console.log(nombre)
  }

  return mostrarNombre
}

const persona = obtenerPersona()

persona()

//Segundo Clouse

const obtenerProducto = () => {
  const nombreProducto = 'Tacos de Pastor'

  function mostrarNombreProducto() {
    console.log(`El nombre del producto es ${nombreProducto}`)
  }

  return mostrarNombreProducto
}

const producto = obtenerProducto()
producto()

//Tercer clousure

const pasearMascota = () => {
  const nombreMascota = 'Canela'

  function sacarApasearMascota() {
    console.log(`La mascota ${nombreMascota} se sacó a pasear `)
  }

  return sacarApasearMascota
}

const paseo = pasearMascota()

paseo()