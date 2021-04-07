import React from 'react'
import Productos from './Productos'


// Recibiendo los productos en la tienda
const Tienda = ({productos,agregarProductoAlCarrito}) => {
    return (
        <div>
            <h1>Tienda</h1>
            <Productos productos={productos} agregarProductoAlCarrito={agregarProductoAlCarrito}/>
        </div>
    );
}

export default Tienda;