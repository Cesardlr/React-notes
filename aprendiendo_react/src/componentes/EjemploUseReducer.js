import React, {useReducer} from 'react';
import Boton from './../elementos/Boton'


// EL USE REDUCER SIRVE MAS QUE NADA PARA APLICACIONES CON MUCHAS FUNCIONES Y APLICAICONES MAS COMPLEJAS

// Accion
// {tipo:'INCREMENTAR'}


// Estado inicial de nuestro reducer
const contadorIncial = {contador:0}

// Reducer
const reducer = (estado,accion)=>{
    switch (accion.tipo) {
        case 'INCREMENTAR':
            return{contador: estado.contador + 1}
        case 'DISMINUIR':
            return{contador: estado.contador - 1}
        case 'REINICIAR':
            return{contador: 0}
        default:
            return estado
    }
}

const EjemploUseReducer = () => {
    const [estado, dispatch] = useReducer(reducer,contadorIncial)
    // Asi es la sintaxis del useReducer




    return ( 
        <div>
        <h1>Contador: {estado.contador}</h1>
        <Boton 
        negro
        marginRight
        onClick={()=> dispatch({tipo:'INCREMENTAR'})}
        >
            Incrementar
        </Boton>


        <Boton
        negro 
        marginRight
        onClick={()=> dispatch({tipo:'DISMINUIR'})}
        >
            Disminuir 
        </Boton>

        <Boton
        negro 
        onClick={()=> dispatch({tipo:'REINICIAR'})}
        >
            Reiniciar
        </Boton>
    </div>
    );
}

export default EjemploUseReducer;