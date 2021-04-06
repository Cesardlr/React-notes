import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import useObtenerArticulos from './../hooks/useObtenerArticulos'
const Blog = () => {
    // const [articulos, establecerArticulos] = useState([]);
    // Aqui se le puso ese vacio por que no queremos que se cargue ningun articulo al principio

    // const [cargando,establecerCargando] = useState(true)

    // PARA QUE SON LOS HOOKS PERSONALIZADOS?
    // Estos son como funciones mejoradas por que pueden usar otros hooks dentro de ellas
    
    
    // useEffect(()=>{
    //     setTimeout( () => {
    //         establecerArticulos([
    //             {
    //                 id: 1,
    //                 titulo: 'titulo del primer articulo'
    //             },
    //             {
    //                 id: 2,
    //                 titulo: 'titulo del segundo articulo'
    //             },
    //             {
    //                 id: 3,
    //                 titulo: 'titulo del tercer articulo'
    //             }
    //         ])

    //         // Aqui estamos simulando que hicimos una llamada a una API, para recopilar los titulos de los articulos2

    //         establecerCargando(false)
    //         // esto es para poder cambiar el estado a que ya cargaron los articulos
    //     }, 3000)
    // },[])



    // ESTE CODIGO DE ATRAS LO METI EN UN HOOK Y LO ESTOY USANDO AUQI NOMAS

    const [articulos,cargando] = useObtenerArticulos()

    // Aqui estamos usando el hook que hicimos en la carpetra de hooks, y estamos extrayendo los articulos y el estado de cargando

    return ( 
        <ContenedorBlog>
            <Titulo>Blog</Titulo>
            {cargando === true ?
            <p>Cargando...</p>
            :
            <div>
                {articulos.map((articulo)=>{
                    return <Articulo key={articulo.id}>{articulo.titulo}</Articulo>
                })}
                {/* Esto lo que hara es que va a acceder a cada uno de los elementos dentro del array en el que estan los articulos */}


            </div>
            }
        </ContenedorBlog>
    );
}

const ContenedorBlog = styled.div`
margin:40px 0 20px 0;
`

const Titulo = styled.h2`
    margin-bottom:10px;
`

const Articulo = styled.p`
    padding:10px 0;
    margin-bottom:10px;
    border-bottom: 1px solid #ccc;
`

export default Blog;