import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times = ['Programação', 'Front-End', 'Data Science', 'DevOps', 'UX e Design', 'Mobile', 'Inovação e Gestão'];

    const aoSalvar = (evento) => {
        // Evento é um nome de uma variável, poderia ser outro, ele faz com que o acontecimento padrão seja cancelado e a gente vai fazer o que quisermos
        evento.preventDefault();
        console.log('O formulário foi enviado');
    }

    return(
        <section className='formulario'>
            {/*
                Aqui colocamos o "on" para ouvirmos o evento de "Quando Enviar" vamos executar uma ação, assim vamos quebrar o padrão da página que é de reiniciar a página que é algo que o React quer evitar que no caso é ser algo reativo, sem sair daquela página

                Está sem () porque não vamos passar nada, apenas executá-lo

                Ele só vai rodar quando o "onSubmit" acontecer
            */}
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;