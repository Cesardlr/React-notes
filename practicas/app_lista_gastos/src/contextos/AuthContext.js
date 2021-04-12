import React, { useContext, useState, useEffect } from 'react'
import {auth} from './../firebase/firebaseConfig'

// creamos el contexto
const AuthContext = React.createContext();

// Creando hook para acceder al contexto
const useAuth  = ()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [usuario, cambiarUsuario] = useState();
    

    // Creamos un state para saber cuando termina de 
    // cargar la comprobacion de onAuthStateChamnged
    const[cargando, cambiarCargando] = useState(true)
    



    // Se realiza la comprobacion solo una vez
    useEffect(()=>{
        // Comprobamos siu hay un usuario
        // Comrobaremos cuando el estado de autenticacion cambie, osea que se cierre sesion o cualquier cosa
        // Ejecutaremos una funcion que tiene dentro el estado de usuario como parametro, es una informacion que ocupa firebase para poder ejecutar e iniciar la sesion, y esto solo vera si lo tenemos entonces pior eso se lo pasamos a cambiarUsuario, para comprobar si hya un usuario o no, si haya regresara un objeto con mucha info dentro, si no existe devuelvge null 

        // La de onAuthStateChanged devuelve una funcion, que guardamos en la variable cancelarSubscripcion, entocnes ya que se deje de ejecutar esa funcion, ya que cerremos sesion vamos a ejecutar esa funcion
        const cancelarSubscripcion = auth.onAuthStateChanged((usuario)=>{
            cambiarUsuario(usuario)
            cambiarCargando(false)
        });
        // Esta funcion la va a regresar cuando se cierre la sesion
        return cancelarSubscripcion;
    }, []);
    


    return ( 
        // Creamos el contexto como proovedor y le inyectamos el estado global de usuario a todos los children, por que sera un contenedor padre
        <AuthContext.Provider value={{usuario:usuario}}>
            {/* Esto lo que hara es que si no esta cargando mostrara los children */}
            {/* Esto se hace para que no cargue antes de que se compruebe que si exista el usuario */}
            {!cargando && children}
        </AuthContext.Provider>
    );
}
 
export {AuthProvider, AuthContext, useAuth};