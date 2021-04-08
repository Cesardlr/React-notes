import React, {useState} from 'react'
import styled from 'styled-components'
import {NavLink, Switch, Route} from 'react-router-dom'
import Inicio from './componentes/Inicio'
import Blog from './componentes/Blog'
import Tienda from './componentes/Tienda'
import Error404 from './componentes/Error404'
import Carrito from './componentes/Carrito'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/tiendaReducer'

const App = () => {

const [carrito, cambiarCarrito] = useState([])
  const agregarProductoAlCarrito = (idProductoAAgregar, nombre)=>{

    // Esto solo se ejcuta si el carrito no tiene elementos ps se agrega uno
    if(carrito.length === 0){
      cambiarCarrito([{id:idProductoAAgregar, nombre, cantidad:1}])
    }else{
      // Checamos primero si el carrito no tiene ya el producto que queremos agregar


      // Si lo tiewne actualizamos el valor

      // SI no lo agregamos como nuevo


      // Para poder editar el arreglo tenemos que clonarlo

      const nuevoCarrito = [...carrito]

      // Checamos si el carrito tiene el id del producto que queremos agregar
      const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito)=>{
        return productoDeCarrito.id === idProductoAAgregar
      }).length > 0;

      // Aqui veremos si  tiene el mismo id, si si despues veremos si el nuevo array regresado de yaEstaEncarrito, y pregunatremos si tiene mas de 0 elementos dentro, con un condicional que regresa verdadero o falso
      
      
      // Si ya tiene el producto lo actualizamos
      
      if(yaEstaEnCarrito){
        // Lo buscamos conforme a su posicion en el arreglo.
        // Conforme a su posicion obtenemos su valor

        nuevoCarrito.forEach((productoDeCarrito, index)=>{
            if(productoDeCarrito.id === idProductoAAgregar){
              const cantidad = nuevoCarrito[index].cantidad
              nuevoCarrito[index] = {id: idProductoAAgregar, nombre: nombre, cantidad: cantidad+1}
            }

            // Esto hara que si el producto del id, es igual al id del prodcuto que qeuremos agregarregresremos otro carrito donde ese producto, en especifico reconocido por su posicion en el array, va a cambiarse por otro con la cantidad nueva
        });



        // Pero si no esta ya el rpodcuto ahi dentro, lo que haremos es que lo meteremos en el nuevo array del carrito con el metodo push, y la cantidad 1
      }else{
        nuevoCarrito.push(
          {
            id:idProductoAAgregar,
            nombre:nombre,
            cantidad:1
          }
        )
      }


      // Actualizamos el estado del carrito, metiendole el nuevoCarrito

      cambiarCarrito(nuevoCarrito)


    }

  }

  const store = createStore(reducer)

  // Que es el reducer?, es la funcion que nos permite administrar nuestro estado, a esa le vamos a enviar un valor por
  // Eejmplo aqui un prodcuto y esa funcion añadira ese producto y asi

  return ( 
    <Provider store={store}>
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/" exact={true} component={Inicio}/>
          <Route path="/blog" component={Blog}/>

          {/* Este se hizo diferente para poder hacerlo diferente, es un ejemplo por si luego tenemos
              muchas paginas y queremos que se pasen los productos pues asi se pasarian, como ahorita el ejemplo de tienda
          */}
          <Route path="/tienda">
            <Tienda agregarProductoAlCarrito={agregarProductoAlCarrito}/>
          </Route>
          <Route component={Error404}/>
        </Switch>
      </main>

      <aside>
          <Carrito carrito={carrito}/>
      </aside>
    </Contenedor>  
    </Provider>
  );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;

    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }

    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
