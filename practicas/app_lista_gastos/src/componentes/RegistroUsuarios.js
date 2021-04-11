import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import {Header, Titulo, ContenedorHeader} from './../elementos/Header'
import Boton from './../elementos/Boton'
import {Formulario,Input,ContenedorBoton} from './../elementos/ElementosDeFormulario'
import {auth} from './../firebase/firebaseConfig'
import {useHistory} from 'react-router-dom'
// Asi importamos una imagen svg
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg'
import styled from 'styled-components';
import Alerta from './../elementos/Alerta'


const Svg = styled(SvgLogin)`
    width:100%;
    max-height:6.25rem; /* 100px */
    margin-bottom:1.25rem; /* 20px */
`


const RegistroUsuarios = () => {
    const history = useHistory()
    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [password2, establecerPassword2] = useState('')
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
    const [alerta, cambiarAlerta] = useState({})

    const handleChange = (e)=>{
        // Aqui vamos a ver cual es el name del input y dependiendo de ese name, vamos  a ejecutar la respectiva funcion para cambiar el estado

        switch (e.target.name) {
            case 'email':
                establecerCorreo(e.target.value)
                break;
            case 'password':
                establecerPassword(e.target.value)
                break;
            case 'password2':
                establecerPassword2(e.target.value)
                break;
        
            default:
                break;
        }
    }



    // Esta sera una funcion asincrona
    const handleSubmit = async(e)=>{
        e.preventDefault()

        // verificamos si la alerta esta oculta y el mensaje tambien
        cambiarEstadoAlerta(false)
        cambiarAlerta({})


        // Hacemos una pequeña validacion con expresiones regulares
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        // Aqui viendo en un condcional si se esta incumpliendo el test, osea que si correo no coincide con la expreisonRegular
        if( !expresionRegular.test(correo)){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo:'error',
                mensaje:'Por favor ingrese un correo electronico valido'
            })
            return;
        }

        // Condicional ver si tiene ntexto
        if(correo === '' || password === '' || password2 === ''){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo:'error',
                mensaje:'por favor rellena los datos'
            })
            return
        }

        // Condicioinal contraseñas iguales
        if(password !== password2){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo:'error',
                mensaje:'las contraseñas no coinciden'
            })
            return;
        }

        // Creando usuario luego de todos los condicionales

        try{
            // Esto crea un usuarip con correo y contraseña, con el auth de firebase
            // Usamos await por que es una asincrona, y esperaremos a que esto termine
            // Para poder enviar a la persona a la paginja de inciio
           await auth.createUserWithEmailAndPassword(correo,password)
           history.push('/')
        //con useHistory Lo enviaremos a la pagina de inciio cuando termine de crear su cuenta
        }
        catch(error){
            cambiarEstadoAlerta(true)
            let mensaje;

            // Aqui estamos entrando al .code del error, que es un codigo que envia directamente firebase para cad auno de los casos, y nosotros cambiaremos uno de esos mensajes para personalizarlos
            switch(error.code){
                case 'auth/invalid-password':
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.'
                break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                break;
            }
            cambiarAlerta({
                tipo:'error',
                mensaje:mensaje
            })
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
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange}
                />

                <Input 
                    type="password"
                    name="password2"
                    placeholder="Verifique la contraseña"
                    value={password2}
                    onChange={handleChange}
                />
                
                <ContenedorBoton>
                <Boton as="button" primario type="submit">Crear Cuenta</Boton>
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

export default RegistroUsuarios;