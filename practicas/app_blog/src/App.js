import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
// Este es el componente padre dentro de la aplicacion que contiene las rutas

import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Blog from './componentes/Blog'
import AcercaDe from './componentes/AcercaDe'

const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        
        <Main>
    {/* Aqui a este se le puso exact para que solo te enviara a inicio si esta en nada mas en la direccion "/" por que si no las demas tambien lo tienen y se muestra ahi tambien */ }
        
          <Route path="/" exact={true} component={Inicio}/>
          <Route path="/Blog"  component={Blog}/>
          <Route path="/acerca-de"  component={AcercaDe}/>
        
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding:40px;
  width:90%;
  max-width:700px;
`

const Main = styled.main`
  background: #fff;
  padding:40px;
  border-radius:10px;
  box-shadow:0px 0px 5px rgba(129,129,129,0.1)
`

export default App;