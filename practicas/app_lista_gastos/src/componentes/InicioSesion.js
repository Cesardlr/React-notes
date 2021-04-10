import React from 'react'
import {Helmet} from 'react-helmet'
import {Header, Titulo, ContenedorHeader} from './../elementos/Header'
import Boton from './../elementos/Boton'
import {Formulario,Input,ContenedorBoton} from './../elementos/ElementosDeFormulario'

// Asi importamos una imagen svg
import {ReactComponent as SvgLogin} from './../imagenes/login.svg'
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
    width:100%;
    max-height:12.5rem; /* 200px */
    margin-bottom:1.25rem; /* 20px */
`

const InicioSesion = () => {
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

            <Formulario>
                <Svg>{SvgLogin}</Svg>
                <Input 
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                />

                <Input 
                    type="password"
                    name="passwrod"
                    placeholder="Contraseña"
                />

                <ContenedorBoton>
                <Boton as="button" primario type="submit">Iniciar Sesion</Boton>
                </ContenedorBoton>
            </Formulario>
    </>
    );
}

export default InicioSesion;