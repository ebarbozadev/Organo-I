import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => {
                // Esse bloco de código para cada item ele vai colocar uma option
                    // <option>{item}</option>
                    // Ou
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default ListaSuspensa;