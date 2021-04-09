import React, {useState} from 'react'

// Creamos contexto = estado global, aqui guardaremos el espacio donde se guardan los valores
const ContextoTema = React.createContext();


// Este componente lo que hace es que da a toda nuestra aplicacion ese estado
// Children lo que hace es que permite que se metan ahi los elementos hijos
const ProovedorTema = ({children}) => {
    
    // Usamos el hook useState y definimos el estado inicial
    const [tema,cambiarTema] = useState(
        {
            alineado: 'center',
            fuente: 20
        }
    );

    const aumentarFuente = ()=>{
        cambiarTema(
            {   
            // Con esto lo que haremos es que vamos a regresar lo que ya estaba en el tema, pero cambiando la fuenet aumentando uno
                ...tema,
                fuente: tema.fuente + 1
            }
        )
    }

    const disminuirFuente = ()=>{
        cambiarTema(
            {   
                ...tema,
                fuente: tema.fuente - 1
            }
        )
    }

    const moverIzquierda = ()=>{
        cambiarTema(
            {   
                ...tema,
                alineado: 'left'
            }
        )
    }
    const moverDerecha = ()=>{
        cambiarTema(
            {   
                ...tema,
                alineado: 'right'
            }
        )
    }
    const moverCentro = ()=>{
        cambiarTema(
            {   
                ...tema,
                alineado: 'center'
            }
        )
    }


    return (

        // Este componente encierra el componente hijo, y permite inyectarle el estado global
        // El estado global se inyecta con un value, que SIEMPRE SERA UN OBJETO
        // Aqui estamos inyectando el estado de tema a todos los chilren de el contextoTema
        <ContextoTema.Provider value={{tema, aumentarFuente, disminuirFuente, moverCentro, moverDerecha, moverIzquierda}}>
            {children}
        </ContextoTema.Provider>
    );
}

export {ContextoTema, ProovedorTema}