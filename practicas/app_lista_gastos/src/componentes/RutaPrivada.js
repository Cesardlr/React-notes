import React from 'react'
import { useAuth } from './../contextos/AuthContext'
import {Route, Redirect} from 'react-router-dom'

const RutaProtegida = ({ children, ...restoDePropiedades }) => {
    const { usuario } = useAuth()


    // Aqui veremos si hay un usuario si hay ps daremos las rutas con los componentes componentes si no, pues redireccionaremos
    if(usuario){
        return <Route {...restoDePropiedades}>{children}</Route>
    } else{
        return <Redirect to="/iniciar-sesion" />
    }
}

export default RutaProtegida;