import React, {useState, useEffect} from 'react';
import styles from './ContadorFuncional.module.css'
import Boton from './../elementos/Boton'


// REGLAS DE LOS HOOKS:
// Siempre se usan dentro de componentes funcionales, si no no sirven
// No los puedes usar en ciclos o condicionales
// Siempre debe de ir en la parte de arriba



const ContadorFuncional = (props) => {
    const[cuenta, cambiarCuenta] = useState(0)


    // HOOK useEffect = componentDidMount + componentDidUpdate


    
// CODIGO PARA QUE FUNCIONE CUANDO SE RENDERIZE DE NUEVO Y QUE CARGEU POR PRIMERA VEZ

    // useEffect(()=>{
    //     console.log('el componente se renderizo')
    // })





// CODIGO PARA QUE FUNCIONE SOLO CUANDO CARGUE POR PRIMERA VEZ

    // useEffect(()=>{
    //     console.log('el componente carego por primera vez')

    //     // 'Se llamo a la API
    // }, [])

    // Solo se le puso un arreglo vacio





// CODIGO PARA QUE CARGUE CADA VEZ QUE SE RENDERIZE DE NUEVO PERO NO CUANDO  SE CARGUE POR PRIMERA VEZ
    
    // useEffect(()=>{
    //     console.log('se cambio el contador')
    // }, [cuenta]) 
    
    // Aqui este checara cuando se cambie la cuenta del contador nada mas, por que se le puso una dependencia dentro del array



// CODIGO PARA EJECUTAR UN CODIGO PARA CUANDO SE VAYA A RETIRAR UN CODIGO DEL DOM
    
    // useEffect(()=>{
         // Codigo del efecto

         // EJEMPLO:
    //     return(()=>{
    //         console.log('adios componente')
            // CERRAR CONEXION CON LA API
    //     })
    // },[])

    // Debe de tener un return con una funcion, y se le pone el array de depenedencias vacio, para que se cargue una sola vez



    // Este hook de useEffect, sirve para que se ejecute el codigo dentro de la funcion flecha siempre que el componente se renderize, osea cada que se cambie el estado de la aplicacion, se renderiza.

    // Cada que el estado cambia todo el componente vuelve a renderizarse

    const incrementar = cantidad =>cambiarCuenta(cuenta+cantidad)
    
    const disminuir = cantidad =>cambiarCuenta(cuenta-cantidad)

    return ( 
        <div>
            <h1>Contador: {cuenta}</h1>


            {/* <button className={styles.boton} onClick={()=> incrementar(props.CI)}>Incrementar</button>
            <button className={styles.boton} onClick={()=> disminuir(props.CD)}>Disminuir </button> */}

            {/* SIN STYLED COMPONENTS */}

            <Boton negro marginRight className={styles.boton} onClick={()=> incrementar(props.CI)}>Incrementar</Boton>
            <Boton negro className={styles.boton} onClick={()=> disminuir(props.CD)}>Disminuir </Boton>

            {/* CON STYLED COMPONENTS */}
            {/* Aqui esto de las props se van a poner despues ahi, ya que se añada el componente al index.js */}
        </div>
     );
}
 
export default ContadorFuncional;