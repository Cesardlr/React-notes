import React from 'react'
import {Helmet} from 'react-helmet'
import {Header, Titulo, ContenedorHeader} from './../elementos/Header'
import Boton from './../elementos/Boton'
import {Formulario,Input,ContenedorBoton} from './../elementos/ElementosDeFormulario'

// Asi importamos una imagen svg
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg'
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
    width:100%;
    max-height:6.25rem; /* 100px */
    margin-bottom:1.25rem; /* 20px */
`


const RegistroUsuarios = () => {
    return (
        <>
            <Helmet>
                <title>Crear cuenta</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>

                    <div>
                        <Boton to="/iniciar-sesion">Iniciar Sesion</Boton>
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

                <Input 
                    type="password"
                    name="passwrod2"
                    placeholder="Verifique la contraseña"
                />
                
                <ContenedorBoton>
                <Boton as="button" primario type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}

export default RegistroUsuarios;