import React from 'react'
import {Helmet} from 'react-helmet'
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from './elementos/Header'
import Boton from './elementos/Boton'

const App = () => {
    return ( 
        <>
            <Helmet>
                <title>Agregar Gasto</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Agregar Gasto</Titulo>
                    <ContenedorBotones>
                        <Boton to="/categorias">Categorias</Boton>
                        <Boton to="/lista">Lista de Gastos</Boton>
                        <Boton>X</Boton>
                    </ContenedorBotones>
                </ContenedorHeader>
            </Header>
        </>
    );
}

export default App;