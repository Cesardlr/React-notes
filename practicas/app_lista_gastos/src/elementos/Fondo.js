import React from 'react'
import styled from 'styled-components'

// Asi se importan los SVGs
import { ReactComponent as Puntos } from './../imagenes/puntos.svg';

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;

const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;

const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

const Fondo = () => {
    return ( 
        <>
            <PuntosArriba />
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            // Este de preservAspectRatio es el que sirve para quitar un espaciado hasta abajo
            preserveAspectRatio="none">
                <path 
                    // eL fill-opacity lo cambiamos a fillOpacity por que ese es codigo JSX
                    fillOpacity="1" 
                    d="M0,64L40,80C80,96,160,128,240,160C320,192,400,224,480,229.3C560,235,640,213,720,197.3C800,181,880,171,960,165.3C1040,160,1120,160,1200,170.7C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                </path>
            </Svg>
            <PuntosAbajo />
        </>    
    );
}

export default Fondo;