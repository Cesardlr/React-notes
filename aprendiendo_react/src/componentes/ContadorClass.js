import React,{Component} from 'react';

// AQUI VERE COMO LO USARE SOLAMENTE CON CLASES Y OBJETOS


class Contador extends Component{
    constructor(props){
        super(props)
        // Asi se obtenian los props antes

        this.state = {contador:0}
        // Asi se ponia el estado antes
    }

    componentDidMount(){
         console.log('el componente se cargo en el dom')

        //  ... LLAMAMOS A LA API ...
    }

    // ESTE SIRVE PARA PODER CHECAR CUANDO SE CARAGA EL COMPONENTE DENTRO DEL DOM, Y PUEDE SERVIR PARA QUE CADA QUE PASE ESO SE CARGUEN APIS O ALGO ASI


    componentDidUpdate(propiedadesAnteriores,estadoAnterior){
        console.log('el componente se actualizo!');
        console.log('propiedades anteriores', propiedadesAnteriores)
        console.log('estadoAnterior', estadoAnterior)
    }

    // Este comprueba cada vez que un componente se vuelve a renderizar por que su estaod cambio, aqui en este caos se ejecutaria cada que se incremente o reste un numero, y podemos saber que estado teniamos y eso antes



    componentWillUnmount(){
        alert('segurp que quieres salir?')
        // ... ACABAR LLAMADA DE API ...
    }

    // Este se ejecutara cada vez que se quiera eliminar al componente, por ejemplo aqui se ejecutaria cuando se le de al boton de cerrar sesion por que se le estaeria  quitando el componente este de el index, sirve para terminar llamadas de apis si ya se inciio una al entrar al componente


    incrementar(cantidad){
        this.setState((estadoAnterior) =>{
            return{
                contador:estadoAnterior.contador + cantidad
            }
        })
        // Aqui se le tenia que poner un this.setState para poder  hacer uno nuevo    
    }

    disminuir(cantidad){
        this.setState((estadoAnterior) =>{
            return{
                contador:estadoAnterior.contador - cantidad
            }
        })
    }

    // Aqui estos se ocupaban poner asi como un metodo ya quer dentro de un objeto no podemos poner una funcion

render(){
    return(
        <div>
            <h1>Contador:{this.state.contador}</h1>
            <button onClick={()=> this.incrementar(5)}>Incrementar</button>
            <button onClick={()=> this.disminuir(3)}>Disminuir</button>

            {/* Awui se le pone this. por que es una clase osea un objeto */}
        </div>
    )
}
}

export default Contador;