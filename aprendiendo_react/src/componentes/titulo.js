import React from 'react';

const Titulo = ({ Usuario = 'usuario',color = 'grey'}) => {

    // Para poder poner algo como por defecto, se pone asi:
    // const Titulo = ({ Usuario = 'usuario',color = 'grey'})

    // ESTO LO QUE HARA ES QUE CUANDO NO HAYA ALGUN VALOR ESE SERA EL POR DEFECTO saldra hola usuario, y d color gris


    // Para poder entrar a las propiedades de un componente se usa asi con props

    // Se puede hacer la desestructuiracion que es meter los props dentro de una variable y se hace poniendolo dentro de llaves y poniendo el nombre de la propiedad

    // por ejemplo {usuario}

    
    // Bueno ahora hice un codigo reutilizable con un solo color, pero ahora como le hago para poder que se puedan poner distintos colores?, asi:
    
    return (<h1 className="Titulo" style={{ color: color }}> Hola {Usuario}</h1>);}

export { Titulo};

// Asi se pondria si hay mas de un componente por exsportar