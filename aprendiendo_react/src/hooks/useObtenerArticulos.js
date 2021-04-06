import {useState, useEffect} from 'react';

const useObtenerArticulos = () => {
    const [articulos, establecerArticulos] = useState([]);
    // Aqui se le puso ese vacio por que no queremos que se cargue ningun articulo al principio

    const [cargando,establecerCargando] = useState(true)

    // PARA QUE SON LOS HOOKS PERSONALIZADOS?
    // Estos son como funciones mejoradas por que pueden usar otros hooks dentro de ellas
    
    
    useEffect(()=>{
        setTimeout( () => {
            establecerArticulos([
                {
                    id: 1,
                    titulo: 'titulo del primer articulo'
                },
                {
                    id: 2,
                    titulo: 'titulo del segundo articulo'
                },
                {
                    id: 3,
                    titulo: 'titulo del tercer articulo'
                }
            ])

            // Aqui estamos simulando que hicimos una llamada a una API, para recopilar los titulos de los articulos2

            establecerCargando(false)
            // esto es para poder cambiar el estado a que ya cargaron los articulos
        }, 3000)
    },[])
    
    
    return [articulos, cargando];
}
 
export default useObtenerArticulos;