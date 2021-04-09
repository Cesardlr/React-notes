import React,{useContext} from 'react';
import styled from 'styled-components'
import {ContextoTema} from './../contextos/contextoTema'

const Controles = () => {

    // Aqui despues de que ya importamos el useContext y el contextotema, pasamos al contextoTema como el contexto actual
    const valores = useContext(ContextoTema)

    return (
        <ContenedorControles>
            <div>
                {/* Aqui pasamos el codigo de la funcion, pero primero entrando al array de valores */}
                <Boton onClick={()=>valores.aumentarFuente()}>Aumentar Fuente</Boton>
                <Boton onClick={()=>valores.disminuirFuente()}>Disminuir Fuente</Boton>
            </div>

            <div>
                <Boton onClick={()=>valores.moverIzquierda()}>Izquierda</Boton>
                <Boton onClick={()=>valores.moverCentro()}>Centro</Boton>
                <Boton onClick={()=>valores.moverDerecha()}>Derecha</Boton>
            </div>
        </ContenedorControles>
    );
}

const ContenedorControles = styled.div`
    margin-top: 20px;
`;

const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;

    &:hover {
        background: #191668;
    }
`;

export default Controles;
