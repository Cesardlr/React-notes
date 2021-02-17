import React from 'react';
import ReactDOM from 'react-dom';

// AQUI SE ESTAN OBTENIENDO TODOS LOS ARCHIVOS DE LA LIBRERIA DE REACT QUE ESTA EN LA CARPETA DE NODE_MODULES
const nombre = 'cesar';


   
  // PARA PODER ESCRIBIR CODIGO DE HTML CON VARIAS ETIQUETAS SE OCUPAN PONER LOS PARENTESIS Y SE DEBE DE AÑADIR UN DIV AFUERZAS
  // <div>
  //  <h1>Hola {nombre}</h1>
  //  <p>Que tengas buen dia</p>
  // /* Si se ponen las {} es posible introducir codigo de javascript */



  // /* ESTE H1 ES POSIBLE GRACIAS A QUE EXISTE JSX QUE ES UNA FORMA DE ESCRIBIR HTML EN JS */)
  // </div>



// Y SI NO QUIERES AÑADIR UN DIV?, PUEDES HACERLO ASI y seria totalmente funcional:
  // <>
  // <h1>Hola {nombre}</h1>
  //  <p>Que tengas buen dia</p>
  // </>



// Y PARA USAR CLASES??---
// {/* <>
// <h1 className="titulo">Hola {nombre}</h1>
// <p>Que tengas buen dia</p>
// </> */}

// COMO ES CODIGO DE JS SE OCUPA PONER CLASSNAME YA QUE CLASS HACE REFERENCIA A LAS CLASES DE OBJETOS EN JS
  

// Y PARA AÑADIR LOS ESTILOS SIN NECESIDAD DE HACER UN DOCUMENTO CSS SERIA ASI:---







// HARE UNA PRACTICA PARA HACER EL JAVASCRIPT JUNTO CON EL DOM QUE OFRECE REACT QUE SERA PARA PODER 'INICIAR SESION' SI INICIAS SESION TE MUETSRA UN TEXTO DE BIENVENIDA Y SI NO DICE QUE NO HAS IIDICADO SESION


// PRIMERA FORMA DE HACERLO  (FORMA LARGA):

// const verificarSesion = (sesion) =>{
// if(sesion == true){
// return JSX;
// }else{
//   return <h1>No has iniciado sesion</h1>
// }
// }


// SEGUNDA FORMA DE HACERLO
const sesion = false;
const pais = 'Mexico'

const JSX =(
  <>

  {sesion === true ? <p>Has iniciadp sesion</p> : <p>No has inciado sesion</p>}
  {/* Hay que recordar que el codigo de js se inserta con unos {} entonces lo que se puede hacer es que  
  los condicionales aqui se ponen asi para eviutar problemas de sintaxis con un ? para el if principal y unos : para el else false
  y ya de ahi realizar la condicion
  */}

  <h1 className="titulo" style={{color:'red'}}>Hola {nombre}</h1>
  <p>Que tengas buen dia</p>

  {/* Aqui verificare si realmente se ha escrito algo en la variable pais, si no hay nada o es undefinded no saldra nada */}
  {pais && <p>Tu eres de: {pais}</p>}
  </>
  )
  



  ReactDOM.render(JSX,document.getElementById('root'));
  // ESTE DE ROOT ESTA EN LA CARPETA PUBLIC EN EL ARCHIVO HTML

