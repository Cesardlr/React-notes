import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Header, Titulo, ContenedorHeader } from './../elementos/Header'
import Boton from './../elementos/Boton'
import { Formulario, Input, ContenedorBoton } from './../elementos/ElementosDeFormulario'
// Asi importamos una imagen svg
import { ReactComponent as SvgLogin } from './../imagenes/login.svg'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import {auth} from './../firebase/firebaseConfig'
import Alerta from './../elementos/Alerta'


const Svg = styled(SvgLogin)`
    width:100%;
    max-height:12.5rem; /* 200px */
    margin-bottom:1.25rem; /* 20px */
`

const InicioSesion = () => {
    const history = useHistory()
    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
    const [alerta, cambiarAlerta] = useState({})


    const handleChange = (e) => {
        if (e.target.name === 'email') {
            establecerCorreo(e.target.value)
        }

        if (e.target.name === 'password') {
            establecerPassword(e.target.value)
        }
    }


   // Esta sera una funcion asincrona
    const handleSubmit = async (e) => {
        e.preventDefault()

        // verificamos si la alerta esta oculta y el mensaje tambien
        cambiarEstadoAlerta(false)
        cambiarAlerta({})


        // Hacemos una pequeña validacion con expresiones regulares
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        // Aqui viendo en un condcional si se esta incumpliendo el test, osea que si correo no coincide con la expreisonRegular
        if (!expresionRegular.test(correo)) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por favor ingrese un correo electronico valido'
            })
            return;
        }

        // Condicional ver si tiene ntexto
        if (correo === '' || password === '') {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'por favor rellena los datos'
            })
            return
        }

        // Creando usuario luego de todos los condicionales

        try {
            // Codigo para inciar sesion cuando ya existe una cuenta
            await auth.signInWithEmailAndPassword(correo, password)
            history.push('/')
            //con useHistory Lo enviaremos a la pagina de inciio cuando termine de crear su cuenta
        }
        catch (error) {
            cambiarEstadoAlerta(true)
            
            let mensaje;
            // Aqui estamos entrando al .code del error, que es un codigo que envia directamente firebase para cad auno de los casos, y nosotros cambiaremos uno de esos mensajes para personalizarlos
            switch (error.code) {
                case 'auth/wrong-password':
                    mensaje = 'La contraseña no es correcta.'
                    break;
                case 'auth/user-not-found':
                    mensaje = 'No se encontro ninguna cuenta de correo electronico'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                    break;
            }
            cambiarAlerta({
                tipo: 'error',
                mensaje: mensaje
            })
        }
    }



    return (
        <>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesion</Titulo>

                    <div>
                        <Boton to="/crear-cuenta">Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit}>
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    value={correo}
                    onChange={handleChange}
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange}
                />

                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Iniciar Sesion</Boton>
                </ContenedorBoton>
            </Formulario>

            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </>
    );
}

export default InicioSesion;