import React, {useState} from 'react'
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
    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [password2, establecerPassword2] = useState('')

    const handleChange = (e)=>{
        // Aqui vamos a ver cual es el name del input y dependiendo de ese name, vamos  a ejecutar la respectiva funcion para cambiar el estado

        switch (e.target.name) {
            case 'email':
                establecerCorreo()
                break;
            case 'password':
                establecerPassword()
                break;
            case 'password2':
                establecerPassword2()
                break;
        
            default:
                break;
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        // Hacemos una pequeña validacion con expresiones regulares
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        
        // Aqui viendo en un condcional si se esta incumpliendo el test, osea que si correo no coincide con la expreisonRegular
        if( !expresionRegular.test(correo)){
            console.log('no es un correo valido')
            return;
        }

        // Condicional ver si tiene ntexto
        if(correo === '' || password === '' || password2 === ''){
            console.log('por favor rellena los datos')
            return
        }

        // Condicioinal contraseñas iguales
        if(password !== password2){
            console.log('las contraseñas si coinciden')
            return;
        }

    }

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

            <Formulario onSubmit={handleSubmit}>
                <Svg>{SvgLogin}</Svg>
                <Input 
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    value={correo}
                    onChange={handleChange}
                />

                <Input 
                    type="password"
                    name="passwrod"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange}
                />

                <Input 
                    type="password"
                    name="passwrod2"
                    placeholder="Verifique la contraseña"
                    value={password2}
                    onChange={handleChange}
                />
                
                <ContenedorBoton>
                <Boton as="button" primario type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}

export default RegistroUsuarios;