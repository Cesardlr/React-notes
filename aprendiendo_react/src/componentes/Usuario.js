import React from 'react';
import { Titulo} from './titulo'
import styled from 'styled-components'

// Asi se tiene que poner si hay mas de un componente en el archivo

// Aqui se tiene que importar react para que funcione de forma adecuada, en este sigue funcionando por quue es sencillo pero hay otros mas complejos    


const Usuario = () => {
    const pais = 'Mexico';
    const amigos = ['alejandro', 'manuel', 'cesar'];

    return (
        <div>
            <Titulo/>
            {/* Aqui como no tiene ningun valor saldria hola usuario y saldria de color grisñ */}

            <Titulo Usuario="cesar" color="red" />
            {/* Use prompt para poder hacer que esto funcionara dinamicamente con distintos nombres  
            ASI:
            usuario={prompt('como te llamas?')}*/}

            {/* Aqui a estos se les pueden `poner propiedades como auqui que puse la de usuario */}

            {/* Este es un componente dentro de otro componente de JSX */}

            <Parrafo>Tu lista de amigos es:</Parrafo>
            {pais && <p>Tu eres de: {pais}</p>}
            <ul>
                {amigos.map((amigo, index) => <li key={index}> {amigo} </li>)}
            </ul>

            <Parrafo>Que tengas un buen dia saludos!</Parrafo>
        </div>
    );
};

// Asi se hacen los styled components

const Parrafo = styled.p`
margin-bottom:20px 0;
background:#4e4;
`

export default Usuario;

// Esto sirve apra asi poder exportar el componente;