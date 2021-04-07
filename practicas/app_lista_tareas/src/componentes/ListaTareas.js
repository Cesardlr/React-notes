import React from 'react';
import Tarea from './Tarea'

// Las funciones siempre deen de ir en el componente padre

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {
    
    const toggleCompletada = (id)=>{
        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id === id){
                return{...tarea, completada: !tarea.completada}
            }
                return tarea;
        }));

        // Tareas.map devuelve una rreglo nuevo, por lo que se ocupa regresar todos los demas valores, y que el valor de esa tarea cambie
    }

    const editarTarea = (id,nuevoTexto)=>{
        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id === id){
                return{...tarea, texto: nuevoTexto}
            }
                return tarea;
        }));
    }

    const borrarTarea = (id) =>{
        cambiarTareas(tareas.filter((tarea)=>{
            if(tarea.id !== id){
                return tarea
            }
                return;
        }));

        
        // Este codigo lo que hace es que crea otro array, en el que buscara en cada una de las tareas, y si nuestro id, no es igual al de la tarea que queremos lo dejara asi como esta, pero cuando encuentre el que nsootros teniamos lo va a borrar

        // EJEMPLo:
        // Queremos borrar el que tiene el id de 3, entonces pasa por todos, por el 1 y el 2 tambien, y eoss no los borrara por que no son iguales al id del elemento que queremos borrar, los borrara hasta que llegue al 3 y no regresara nada, por lo que se quita de ahi
    }


    return ( 
        <ul className="lista-tareas">
            {
            tareas.length > 0
            ? tareas.map((tarea)=>{
                if(mostrarCompletadas){
                    return  <Tarea 
                                key={tarea.id}
                                tarea = {tarea}
                                toggleCompletada ={toggleCompletada}
                                editarTarea={editarTarea}
                                borrarTarea={borrarTarea}
    
                                // Todos estos valores se estan exportando a el archivo de tareas.js
                            />

                            // Aqui si la tarea no esta completada la devolvemos
                }else if(!tarea.completada){
                    return  <Tarea 
                        key={tarea.id}
                        tarea = {tarea}
                        toggleCompletada ={toggleCompletada}
                        editarTarea={editarTarea}
                        borrarTarea={borrarTarea}
                />
                }

                // Si esta completada no se devuelve
                return;
                
            })
            : <div className="lista-tareas__mensaje"> ~ No hay tareas agregadas~</div>
        }
        </ul>
    );
}

export default ListaTareas;