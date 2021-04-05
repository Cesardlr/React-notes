import React, {useState} from 'react';
import styles from './ContadorFuncional.module.css'

const ContadorFuncional = (props) => {
    const[cuenta, cambiarCuenta] = useState(0)

    const incrementar = cantidad =>cambiarCuenta(cuenta+cantidad)
    
    const disminuir = cantidad =>cambiarCuenta(cuenta-cantidad)

    return ( 
        <div>
            <h1>Contador: {cuenta}</h1>
            <button className={styles.boton} onClick={()=> incrementar(props.CI)}>Incrementar</button>
            <button className={styles.boton} onClick={()=> disminuir(props.CD)}>Disminuir </button>
            {/* Aqui la clase de boton la esta sacando de el archivo css de formulario inicio sesion.css pero no se pueden separar? 
            Pues si mira asi:
            se le cambia nomas a boton-contador o algo asi y ya serviria
            */}
            {/* Aqui esto de las props se van a poner despues ahi, ya que se añada el componente al index.js */}
        </div>
     );
}
 
export default ContadorFuncional;