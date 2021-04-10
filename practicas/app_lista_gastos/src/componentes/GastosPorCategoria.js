import React from 'react'
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from './../elementos/Header'
import {Helmet} from 'react-helmet'

const GastosPorCategoria = () => {
    return (
        <>
            <Helmet>
                <title>Gastos por Categoria</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Gastos por Categorias</Titulo>
                </ContenedorHeader>
            </Header>
        </>
    );
}

export default GastosPorCategoria;