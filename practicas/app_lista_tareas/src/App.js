import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header'
import FormularioTareas from './componentes/FormularioTareas'
import ListaTareas from './componentes/ListaTareas'

const App = () =>{
  



  // LOCALSTORAGE DE LAS TAREAS

  const tareasGuardadas = 
    localStorage.getItem('tareas') 
    ? JSON.parse(localStorage.getItem('tareas')) 
    : []
      // Esta constante conceta con el LocalStorage, y despues obtiene las tareas
      // Lo convierte a una string con parse, si existe un elemento en tareas, devuelve las tareas, si no, devuelve un array vacio

  const [tareas, cambiarTareas] = useState(tareasGuardadas);

    useEffect(()=>{
      localStorage.setItem('tareas',  JSON.stringify(tareas));
      // Aqui esto lo estamos guardando en nuestro srrvidor local , donde el primer parametro es como se denominara eso como que nombre   de variable tendra, y el 2do es que ira dentro de ahi
    },[tareas])
    
    // Este effect solo se ejecutara cuando se cambien las tareas







    // LOCAL STORAGE MOSTRAR COMPLETADAS


    // Accedemos a localStorage y comprobamos si mostrar completadas es null
    let configMostrarCompletadas = ''
    if(localStorage.getItem('mostrarCompletadas') === null){
      configMostrarCompletadas = true;
    }else{
      configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true'
      // Aqui esto tiene un condicional, que si se cumple devuelve true, si es que es true como lo que esta en strings, pero si no va a devolver false
    }





  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas)
    useEffect(()=>{
      localStorage.setItem('mostrarCompletadas',  mostrarCompletadas.toString());
      // Aqui en este efecto, lo que hice fue que meti el de mostraCompletadas del boton ese, pero lo hice string por que es un valor booleano
    },[mostrarCompletadas])







  return (
    <div className="contenedor">
      <Header 
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
        mostrarCompletadas = {mostrarCompletadas}
      />

      <FormularioTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
      />

      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
        mostrarCompletadas = {mostrarCompletadas}
        />
    </div>
  );
}

export default App;
