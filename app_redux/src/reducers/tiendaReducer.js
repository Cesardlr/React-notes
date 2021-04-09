const estadoInicial = {
    productos: [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' },
        { id: 4, nombre: 'Producto 4' }
    ],

    carrito: []
}
// Este archivo se encargara de cambiar todos los estados de la pagina

// eSTE SERIA COMO EL ESTADOiNICIAL DE EL CARRITO

// reducer se encarga de adsministrar el estado global de la app

const reducer = (estado = estadoInicial, accion) => {
    // La accion es lo que cambiara el estado

    // El reducer siempre va a regresar el estado

    // Accion es un objeto
    switch (accion.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':
            const { nombre, idProductoAAgregar } = accion;
            // Aqui estamos extrayendo esos datos de la accion

            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }]
                }
            } else {
                // Checamos primero si el carrito no tiene ya el producto que queremos agregar


                // Si lo tiewne actualizamos el valor

                // SI no lo agregamos como nuevo


                // Para poder editar el arreglo tenemos que clonarlo

                const nuevoCarrito = [...estado.carrito]

                // Checamos si el carrito tiene el id del producto que queremos agregar

                const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
                    return productoDeCarrito.id === idProductoAAgregar
                }).length > 0;

                // Aqui veremos si  tiene el mismo id, si si despues veremos si el nuevo array regresado de yaEstaEncarrito, y pregunatremos si tiene mas de 0 elementos dentro, con un condicional que regresa verdadero o falso

                // Si ya tiene el producto lo actualizamos

                if (yaEstaEnCarrito) {
                    // Lo buscamos conforme a su posicion en el arreglo.
                    // Conforme a su posicion obtenemos su valor

                    nuevoCarrito.forEach((productoDeCarrito, index) => {
                        if (productoDeCarrito.id === idProductoAAgregar) {
                            const cantidad = nuevoCarrito[index].cantidad
                            nuevoCarrito[index] = { id: idProductoAAgregar, nombre: nombre, cantidad: cantidad + 1 }
                        }

                        // Esto hara que si el producto del id, es igual al id del prodcuto que qeuremos agregarregresremos otro carrito donde ese producto, en especifico reconocido por su posicion en el array, va a cambiarse por otro con la cantidad nueva
                    });



                // Pero si no esta ya el rpodcuto ahi dentro, lo que haremos es que lo meteremos en el nuevo array del carrito con el metodo push, y la cantidad 1
                
                } else {
                    nuevoCarrito.push(
                        {
                            id: idProductoAAgregar,
                            nombre: nombre,
                            cantidad: 1
                        }
                    );
                }

                return {
                    ...estado,
                    carrito:nuevoCarrito
                }

                // Aqui venimos regresando el carrito nuevo con le estado anterior
            }

            return estado

        default:
            return estado;
            break;
    }
}

// Esta es una ccion y se envia al codigo
// {type:'AGREGAR_PRODUCTO_AL_CARRITO'}

// Aqui se le pasa el estado actual, y se le añade en la accion un producto

export default reducer


// Al codigo inicial para que el reducer pueda funcionar correctamente se le llama boilerplate