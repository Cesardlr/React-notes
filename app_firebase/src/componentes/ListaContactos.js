import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import db from './../firebase/firebaseConfig'
import Contacto from './Contacto'

const ListaContactos = () => {

    const [contactos, cambiarContactos] = useState([])

    useEffect(()=> {
        
        // Aqui ejecutaremos una funcion cada vez que en esa funcion se haga un cambio o un snapshot
        db.collection('usuarios').onSnapshot((snapshot)=>{

            // Aqui el snapshots.docs es donde estan los datos de cada uno de los docuymentos que hay en la base de datos, y dentro de eso esta la data que devuelve el id el nombre y correo

            // Ejecutaremos un map, para poder sacar los datos de cada uno de lso elementos de ese array

            // Eso devolviendolo dentreo de la parte de cambiarCiontactos, por lo que ya se agregan si se pone ahi
            cambiarContactos(snapshot.docs.map((documento)=>{
                return {...documento.data(), id:documento.id}
            }))
        });
    }, []);

    // Aqui le puse el arreglo vacio de depenedencias para que cargue solo cuando se cambie este

    return ( 
        // Aqui esto es un condicional preguntando si teine mas de 0 elementos el estrado de contactos
        // Si no pues no se ejecuta nada
        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto)=>{
                return(
                    <>
                        <Contacto 
                            Key={contacto.id} 
                            id={contacto.id} 
                            nombre={contacto.nombre}
                            correo={contacto.correo}
                            />
                    </>
                )
            })}
        </ContenedorContactos>
     );
}

const ContenedorContactos = styled.div`
    margin-top:40px;
`

export default ListaContactos;
