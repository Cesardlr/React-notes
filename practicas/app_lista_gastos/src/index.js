import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'
import Contenedor from './elementos/Contenedor'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InicioSesion from './componentes/InicioSesion'
import EditarGasto from './componentes/EditarGasto'
import GastosPorCategoria from './componentes/GastosPorCategoria'
import RegistroUsuarios from './componentes/RegistroUsuarios'
import ListaDeGastos from './componentes/ListaDeGastos'
import { Helmet } from 'react-helmet'
import favicon from './imagenes/logo.png'
import Fondo from './elementos/Fondo'
import { AuthProvider } from './contextos/AuthContext'
import RutaPrivada from './componentes/RutaPrivada'

WebFont.load({

  // Asi se usan las fuentes en react con webfontloader
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});


const Index = () => {
  return (
    <>
      {/* Helmet sirve para poder poner todo como si fueramos a hacer una pagina web con html
  COSAS COMO:
  -Title
  -meta viewports
  -links, etc
  */}
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      {/* inyectamos ele stado global a toda nuestra aplicacion */}
      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>

              {/* Estas no estan privadas, por que trodos pueden acceder */}
              <Route path="/iniciar-sesion" component={InicioSesion} />
              <Route path="/crear-cuenta" component={RegistroUsuarios} />

              <RutaPrivada path="/categorias" >
                <GastosPorCategoria />
              </RutaPrivada>

              <RutaPrivada path="/lista" >
                <ListaDeGastos />
              </RutaPrivada>

              <RutaPrivada path="/editar/:id" >
                <EditarGasto />
              </RutaPrivada>

              <RutaPrivada path="/" >
                <App />
              </RutaPrivada>

            </Switch>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>

      <Fondo />
    </>
  );
};


ReactDOM.render(<Index />, document.getElementById('root'));
