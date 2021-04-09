import React, {useContext} from 'react';
// El hook useContext sirve para poder acceder a un contexto
import posts from './../data/posts'
import {Link} from 'react-router-dom';
import {ContextoTema} from './../contextos/contextoTema'
import Controles from './Controles';

const Blog = () => {

    // Esto sirve para saber cual es el contexto

    // EJEMPLO:
    // const hola = useContext(ContextoTema)
    // console.log(hola)

    return (
            <div>
                <h2>blog</h2>
                <ul>
                    {posts.map((post)=>{
                        return (
                            <li key={post.id}>
                                <Link to={`/post/${post.id}`}>{post.titulo}</Link>
                                {/* esto creara el link a la direccion de post, con el id del articulo */}
                            </li>
                        )
                    })}
                </ul>
                <Controles />
            </div>
    );
}

export default Blog;