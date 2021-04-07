import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <ContenedorHeader>
            <Titulo>Mi blog personal</Titulo>
            <Menu>
                <NavLink to="/" exact={true}>Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/acerca-de">Acerca de</NavLink>

                {/* Estos son unos links especiales que se usan con react router */}
                {/* Usamos NavLink en vez de link por que el enlace en ese caso tiene una clase que se llama active, si esta activo */}
            </Menu>
        </ContenedorHeader>
    );
}


const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom:40px;
`

const Titulo = styled.h1`
    margin-bottom:10px;
    font-size:26px;
    text-transform:uppercase;
`

const Menu = styled.nav`
    a{
        text-decoration:none;
        color:#165168;
        margin: 0 10px;
    }

    a:hover{
        color:#191668;
    }

    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom:3px;
    }
`
export default Header;