import React from 'react'
import { ReactComponent as IconCerrarSesion } from './../imagenes/log-out.svg';
import Boton from './Boton'
import {auth} from './../firebase/firebaseConfig'
import {useHistory} from 'react-router-dom'

const BotonCerrarSesion = () => {
    const history = useHistory()

    const cerrarSesion = async ()=>{
        try{
            auth.signOut()
            history.push('/iniciar-sesion');
        }catch(error){
            console.log(error)
        }
    }
    return (
        // El as es para que se comporte como boton y que no funcione como link de react router
        <Boton iconoGrande as="button" onClick={cerrarSesion}>
            <IconCerrarSesion />
        </Boton>
    );
}

export default BotonCerrarSesion;