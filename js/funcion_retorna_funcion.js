const obtenerCliente = () => () => console.log('Vcitor Hugo')

const fn = obtenerCliente()

fn()

const obtenerProducto = producto => () => console.log(`El producto se obtuvo y es ${producto}`)

const fn1 = obtenerProducto('Tacos')

fn1()