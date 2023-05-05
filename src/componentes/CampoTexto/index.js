import './CampoTexto.css';

const CampoTexto = (props) => {
    let valor = '';

    const aoDigitado = (evento) => {
        valor = evento.target.value;
        // Vamos pegar o que está sendo digitado
        // .target é um evento do JavaScript que diz o objetivo e com o .value dizemos que o objetivo é o valor do que está sendo digitado
        //console.log(evento.target.value)
        console.log(valor);
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
}

export default CampoTexto;