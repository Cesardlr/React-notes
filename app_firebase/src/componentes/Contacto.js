import React, {useState} from 'react'
import styled from 'styled-components'
import db from './../firebase/firebaseConfig';


const Contacto = ({id, nombre,correo}) => {

    // Aqui veremos si se esta o no editando la tarea
    const [editandoTarea, cambiarEditandoTarea] = useState(false);


    // Estos son los estados que estaran en los inputs de editar el nombre o correo actual
    const [nuevoNombre, cambiarNuevoNombre] = useState(nombre)
    const [nuevoCorreo, cambiarNuevoCorreo] = useState(correo)

    const actualizarContacto = (e) =>{
        e.preventDefault();

        // Esta funcion es la que va a estar en lo de editar

        // Aqui lo que ahcemos es que al dar click en el bnoton actualizar, se va a actualizar el documento con el id que estamos viendo, pero con los nuevos nombres y correos
        db.collection('usuarios').doc(id).update({
            nombre:nuevoNombre,
            correo: nuevoCorreo
        })

        // Agregamos us then y catch
        .then(()=>{
            console.log('el usuario se actualizo correctamente')
        })

        .catch((error)=>{
            console.log('ghubo un error')
            console.log(error)
        })

        cambiarEditandoTarea(false)
    }

    const eliminarContacto = (id)=>{

        // Aqui estamos accediendo al docuemnto con el id ese que especificamos y lo estamso eliminando
        db.collection('usuarios').doc(id).delete()
        // Agregamos us then y catch
        .then(()=>{
            console.log('el usuario se elimino correctamente')
        })

        .catch((error)=>{
            console.log('hubo un error')
            console.log(error)
        })
    }

    return ( 
        <ContenedorContacto>
            {editandoTarea 
                ?
                    <form action="" onSubmit={actualizarContacto}>
                        <Input 
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={(e)=> cambiarNuevoNombre(e.target.value)}
                            placeholder="Nombre"
                        />
                        <Input 
                            type="email"
                            name="correo"
                            value={correo}
                            onChange={(e)=> cambiarNuevoCorreo(e.target.value)}
                            placeholder="Correo"
                        />

                        <Boton type="submit">Actualizar </Boton>
                    </form>
                :
                    <>
                        <Nombre>{nombre}</Nombre>
                        <Correo>{correo}</Correo>
                        <Boton onClick={()=> cambiarEditandoTarea(!editandoTarea)}>Editar</Boton>
                        <Boton onClick={()=> eliminarContacto(id)}>Borrar</Boton>
                    </>
            }
        </ContenedorContacto>
    );
}

const ContenedorContacto = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Nombre = styled.p`
    font-weight: bold;
`;

const Correo = styled.p`
    font-style: italic;
    color: #6B6B6B;
    margin: 5px 0;
`;

const Boton = styled.button`
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin: 0px 2px;
    margin-bottom: 10px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;

    &:hover {
        background: #3D76E9;
    }
`;

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;

export default Contacto;