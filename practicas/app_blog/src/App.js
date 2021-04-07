import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
// Este es el componente padre dentro de la aplicacion que contiene las rutas

const App = () => {
  return ( 
    <BrowserRouter>
      <div>
        <header>
        <h1>Mi blog personal</h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/acerca-de">Acerca-de</Link>

            {/* Estos son unos links especiales que se usan con react router */}
          </nav>
      </header>

        <main>
      
        <Route path="/" exact={true}>
          <div>
            <h2>Pagina de inicio</h2>
              <p>Esta es la paginaprincipal de nuestro sitio</p>
          </div>
        </Route>

        {/* Aqui a este se le puso exact para que solo te enviara a inicio si esta en nada mas en la direccion "/" por que si no las demas tambien lo tienen y se muestra ahi tambien */}

        <Route path="/blog">
          <div>
            <h2>blog</h2>
              <li>Articulo #1</li>
              <li>Articulo #2</li>
              <li>Articulo #3</li>
          </div>
        </Route>

        <Route path="/acerca-de">
          <div>
            <h2>Acerca de</h2>
              <p>Hola me llamo cesar</p>
          </div>
        </Route>
      
      </main>
    
      </div>
    </BrowserRouter>  
  );
}

export default App;