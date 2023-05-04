// Estamos importando o arquivo React que criamos e referenciando aonde ele está (utilizando a palavra reservada FROM)
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;
