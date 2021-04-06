import React, { useState } from 'react';

// Aqui en este de usestate es para poder ver el estado de la alicacion
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario'
import FormularioIncioSesion from './componentes/FormularioInicioSesion'

import ContadorClass from './componentes/ContadorClass'
import ContadorFuncional from './componentes/ContadorClassFuncional'
import './index.css'
import Boton from './elementos/Boton'
import EjemploUseReducer from './componentes/EjemploUseReducer'
import Blog from './componentes/Blog'
// Aqui estoy importando desde la carpeta esa a ese componente de usuario



// AQUI SE ESTAN OBTENIENDO TODOS LOS ARCHIVOS DE LA LIBRERIA DE REACT QUE ESTA EN LA CARPETA DE NODE_MODULES







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












// ----------------------------------------- COMO SON LOS ARREGLOS EN JSX?



// const JSX =(
//   <>
//   {sesion === true ? <p>Has iniciadp sesion</p> : <p>No has inciado sesion</p>}

//   {/* Hay que recordar que el codigo de js se inserta con unos {} entonces lo que se puede hacer es que  
//   los condicionales aqui se ponen asi para eviutar problemas de sintaxis con un ? para el if principal y unos : para el else false
//   y ya de ahi realizar la condicion
//   */}

// Y PARA AÑADIR LOS ESTILOS SIN NECESIDAD DE HACER UN DOCUMENTO CSS SERIA ASI:---

//   <h1 className="titulo" style={{color:'red'}}>Hola {nombre}</h1>
//   <p>Que tengas buen dia</p>

//   {/* Aqui verificare si realmente se ha escrito algo en la variable pais, si no hay nada o es undefinded no saldra nada */}

//   {pais && <p>Tu eres de: {pais}</p>}
//   <ul>
//     {amigos.map((amigo,index) =>{
//       return <li key={index}>{amigo}</li>


//       // ESTO PERMITE HACER BUCLES QUE REGRESEN CODIGO JSX, PERO AQUI SI TE DAS CUENTA OCUPAS PONER UNA KEY QUE TIENE EL VALOR DE INDEX Y ESO ES POR QUE CADA UNO DE LOS VALORES DEBE DE SER UNICO
//     })}
//   </ul>
//   </>
//   )










// ------------------------------------------    COMPONENTES EN REACT:

// ¿QUE SON LOS COMPONENT6ES DE REACT?
// Son capsulas de codigo que se pueden usara para asi poder repetirse






// Los componentes deben de ir con MAYUSCULA al principio




// Aqui se borro lo de JSX para poder hacer el componente de app que contendra demas componentes
const App = () => {

  // Aqui por ejemplo se supone que cuando se le de click a el boton con este evento, lo que pasa aqui es que cuando se cambia eso a false no pasaria nada

  // Por lo que  si se quiere eso, se tiene que ver los:
  // ESTADOS DE LA APLICACION:
  // ¿QUE SON LOS ESTADOS DE LA APLICACION?
  // Esto permite administrar en que parte estas de u aplicacion

  const [sesion, cambiarEstadoSesion] = useState(true);

  // Asi se forman los estados en react, el primer parametro fue el nombre de la sesion y el segundo es la funcionq ue se usara para cambiar el estado de esta, y despues el estaodo que va igual en el estado

  return (
    <div className="contenedor">
      {sesion === true ?
        <>
          <Usuario />
          <Blog />
          < EjemploUseReducer/>
          {/* <ContadorFuncional CI={3} CD={1}/> */}

          {/* <button onClick={() => cambiarEstadoSesion(false)}>Cerrar sesion</button> */}
          {/* Sin styled components */}

          <Boton largo marginTop onClick={() => cambiarEstadoSesion(false)}> Cerrar sesion </Boton>
          {/* Con styled components */}
          
          
          {/* Asi es como se pone el eventopara cambiar el estado del componente */}

          {/* ASI SE PONEN EVENTOS A LOS BOTONES EN REACT */}


          {/* Los componentes se ponen como si fueran html  */}
          {/* Y ya apartir de aqui pudes poner los que quieras son como pedazos de codigos */}
        </>

        :
        <>
         
          <FormularioIncioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
          {/* En este le meti esa propiedad de cambiarEstadoSesion como propiedad, para asi poder modificarlo en el componente del formulario */}
        </>

      }
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

// ESTE DE ROOT ESTA EN LA CARPETA PUBLIC EN EL ARCHIVO HTML

