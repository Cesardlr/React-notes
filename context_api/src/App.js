import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Este es el componente padre dentro de la aplicacion que contiene las rutas

import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Blog from './componentes/Blog'
import Post from './componentes/Post'
import AcercaDe from './componentes/AcercaDe'
import Error404 from './componentes/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        
        <Main>
    {/* Aqui a este se le puso exact para que solo te enviara a inicio si esta en nada mas en la direccion "/" por que si no las demas tambien lo tienen y se muestra ahi tambien */ }
        
          <Switch>
            <Route path="/" exact={true} component={Inicio}/>
            <Route path="/Blog"  component={Blog}/>
            <Route path="/post/:id"  component={Post}/>
            {/* Aqui le pusimos el :id por que es una ruta dinamica que dependera de ese numero, que en este caso es el id */}

            <Route path="/acerca-de"  component={AcercaDe}/>
            <Route component={Error404}/>
          </Switch>

          {/* Switch lo que hace es que pasa por cada una de las pagina s y poco a poco las va comprobando a ver si encuentra cual es
          ,osea si la ruta coincide con una la deja, si no la pasa
          */}
          
        
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