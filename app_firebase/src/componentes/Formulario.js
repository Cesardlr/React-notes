import React,{useState} from 'react'
import styled from 'styled-components'
import db from './../firebase/firebaseConfig'

const Formulario = () => {
    const[nombre,cambiarNombre] = useState('')
    const[correo,cambiarCorreo] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault();

        // Aqui estamos creando una coleccion en la base de datos, ya antes creada en firebase

        // Con esto estamos haciendo una coleccion con el nombnre usuarios y con el ".add" añadimos un docuemnto con los valores que ingresamos que en este caso serian el nombre y el correo

        // Esto devuelve una promesa por lo que usaremos then

        db.collection('usuarios').add({
            // El nombre y correo los sacamos de los estados de arriba
            nombre: nombre,
            correo: correo
        })

        // Aqui usamos then por que es una promesa 
        .then(()=>{
            console.log('se agrego correctamente un documento')
        })

        // Aqui usamos catch por si hubo cualquier tipo de error
        .catch((error)=>{
            console.log('hubo un error al intentar guardar el document')
            console.log(error)
        })


        // Esto es para poder dejar los inputs en blanco despues de que se haya enviado el codigo
        cambiarNombre('')
        cambiarCorreo('')
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <Input 
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => cambiarNombre(e.target.value)}
                placeholder="Nombre"
            />
            <Input 
                type="email"
                name="correo"
                value={correo}
                onChange={(e) => cambiarCorreo(e.target.value)}
                placeholder="Correo"
            />

            <Boton type="submit">Agregar</Boton>
        </form>
    );
}

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;

const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;

    &:hover {
        background: #3D76E9;
    }
`;
export default Formulario;