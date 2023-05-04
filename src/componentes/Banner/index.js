import './Banner.css';

// Criando uma função Banner
function Banner(){
    // Vamos retornar algo para essa funcção
    // O return está com () é porque vamos retornar algo com multiplas linhas.
    // Isso que escrevemos chama-se JSX, é como o React trabalha com a parte visual. Parece HTML mas não é
    return(
        // ClassName é utilizado para darmos nome para uma classe, se utilizarmos a palavra class por ser JavaScript ele irá entender que é uma classe do JS e não do CSS
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo"/>
        </header>
    )
}

// Exportando o nosso arquivo Banner
export default Banner;