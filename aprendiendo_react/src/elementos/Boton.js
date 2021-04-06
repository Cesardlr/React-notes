import styled, {css} from 'styled-components'

const Boton = styled.button`
background: #83d394;
display: inline-block;
padding: 20px;
border: none;
border-radius: 3px;
font-weight: bold;
font-family: Arial, sans-serif;
cursor: pointer;
transition: .3s ease all;

/* Añadiendo condicionales en el codigo de css, que por ejemplo si tiene propiedad largo sea asi y si no que sea de otra forma */

width: ${props => props.largo ? '100%' : 'auto'};

&:hover{
    background: #44a559;
    color: #fff;
}

// Asi se añade lo de hover


${props => props.negro && css`
    background: #000;
    color:#fff;
`}
// Asi es como se pone de diferente color y asi lo de los botones y eso, poniendo porpiedades en el elemento osea la etiqueta que sale

${props => props.marginTop && css `margin-top:10px;`}
${props => props.marginRight && css `margin-right:10px;`}

`;

export default Boton;
// Es importante poner eso para que se pueda comunicar con otros archivo
