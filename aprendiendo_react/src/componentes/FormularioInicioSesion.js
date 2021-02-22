import React, { useState } from 'react';

const FormularioIncioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('')


    // PRIMERA FORMA DE HACER LAS FUNCIONES UNA POR UNA

    // const onChangeUsuario = (e)=>{
    //         cambiarUsuario(e.target.value)
    //     }
    // const onChangePassword = (e)=>{
    //         cambiarPassword(e.target.value)
    //     }

    // FORMA MAS OPTIMIZADA CON UNA SOLA FUNCION PARA LOS 2
        const onChange = (e) =>{
            if(e.target.name === 'usuario'){
                cambiarUsuario(e.target.value)
            }else if(e.target.name === 'password'){
                cambiarPassword(e.target.value)
            }
        }

        const onSubmit = (e) =>{
            e.preventDefault();
            // Este de preventDefault lo que hara es que dejara de actura como esta predeterminado, por lo que aqui no te enviaria a la pagina principal
            
            if(usuario === 'cesar' && password==='123'){
                props.cambiarEstadoSesion(true)
            }else{
                alert('es incorrecto')
                cambiarUsuario('')
                cambiarPassword('')
                // Esto de cambiarUsuario y el otro se ponen con un ('') para asi poder reinicisr el formulario si es incorrecto
            }
        }


    return (
        <form action="" onSubmit={onSubmit}>
            <p>Usuario: {usuario}</p>
            <p>Contraseña:{password}</p>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    onChange={  onChange}
                    // Este de onChange lo que hace es que por cada cambio que pase en el input lo registratrara

                        // Bueno aqui lo que estamos haciendo es que estamos pasandole un parametro llamado e, a este evento y luego entramos a su target y a su value, para que el useState de usuario sea igual a el valor que se este escribiendo para que en el label de usuario se escriba el usuario que esta siendo introducido
                />
                {/* Aqui se le puso el mismo id y htmlFor allabel y al input para poder conectarlos */}
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password} 
                    onChange={onChange}
                    />
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
    );
}

export default FormularioIncioSesion;