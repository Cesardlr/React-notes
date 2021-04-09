import React from 'react';
import posts from './../data/posts'
import {useParams, Redirect} from 'react-router-dom'
// Esto nos esta dando las props, que son el id de la ruta dinamica y ttrodo eso, (es un hook esta cosa de useParams)

const Post = () => {
    const {id} = useParams()
    // Aqui se le pone asi para poder extraer el id de los parametros ya que viene dentro de llaves 

    return (
        <>
        {posts[id-1] ?
        <div>
            <h1>{posts[id-1].titulo}</h1>
            <p>{posts[id-1].texto}</p>
        </div>
        :
        <Redirect to="/" />
    }

    {/* Este condicional a a checar si el post que se busca existe, 
    si es ais va a devolver los datos del posy si no te redirecciona  a la pagina principal */}
        </>
    );
}

export default Post;