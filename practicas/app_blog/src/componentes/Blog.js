import React from 'react';
import posts from './../data/posts'
import {Link} from 'react-router-dom';

const Blog = () => {
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
            </div>
    );
}

export default Blog;