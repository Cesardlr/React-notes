import React,{Component} from 'react';

// AQUI VERE COMO LO USARE SOLAMENTE CON CLASES Y OBJETOS


class Contador extends Component{
    constructor(props){
        super(props)
        // Asi se obtenian los props antes

        this.state = {contador:0}
        // Asi se ponia el estado antes
    }



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