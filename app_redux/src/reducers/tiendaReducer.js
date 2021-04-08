// Este archivo se encargara de cambiar todos los estados de la pagina
const estadoInicial = {
    productos: [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' },
        { id: 4, nombre: 'Producto 4' }
    ],
    carrito:[]
}

// eSTE SERIA COMO EL ESTADOiNICIAL DE EL CARRITO

const reducer = (estado = estadoInicial, accion) => {
    // La accion es lo que cambiara el estado

    // El reducer siempre va a regresar el estado
    return estado;
}

// Aqui se le pasa el estado actual, y se le añade en la accion un producto

export default reducer


// Al codigo inicial para que el reducer pueda funcionar correctamente se le llama boilerplate