import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
    // let valor = '';
    // Hulk do estado
    // Nos deu o valor e uma forma para definirmos esse valor
    // const [valor, setValor] = useState('');
    // Conseguimos colocar um valor padrão também, exemplo:
    // const [valor, setValor] = useState('Emanuel Marcos');

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
        // setValor(evento.target.value);
        // // Vamos pegar o que está sendo digitado
        // // .target é um evento do JavaScript que diz o objetivo e com o .value dizemos que o objetivo é o valor do que está sendo digitado
        // //console.log(evento.target.value)
        // console.log(valor);
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
}

export default CampoTexto;