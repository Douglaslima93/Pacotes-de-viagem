
import './App.css';
import './Json.js';
import praia1 from "../src/img/praia1.jpg";
import cruzeiros1 from "../src/img/cruzeiros1.jpg";
import resort1 from "../src/img/resort1.jpg";
import github from "../src/img/github.png";
import linkedin from "../src/img/linkedin.png";
import whatsapp from "../src/img/whatsapp.png";

function App() {
  return (
    <div className="App">
      <div className='main'>

        <div className='titulo'>
          <h1>Que tal fazer aquela viagem?</h1>
        </div>

        <div className='paragrafo'>
          <p>Viajar e sempre bom, ainda mais com pessoas especiais.</p>
        </div>

      <div className='pacotes'>

        <div className='praia'>
          <h2>Praia</h2>
          <img src={praia1} alt="praia"/>
          <p>
            Já imaginou curtir a sombra dos coqueiros enquanto recebe raios dourados de sol e se refresca no mar 
            quentinho de ondas calmas? Não pense mais, vá curtir o litoral agora!
          </p>

        </div>

        <div className='cruzeiro'>
          <h2>Cruzeiro</h2>
          
          <img src={cruzeiros1} alt="cruzeiro"/>
          <p>
            Em uma viagem de navio, basta entrar, desfazer as malas e relaxar!
            Você só precisa escolher o destino e o tipo de cabine. Durante a viagem os navios têm
            programação para todos os gostos e idades a todo o tempo. Têm espaços para crianças se
            divertirem, enquanto você poderá relaxar em um SPA ou até mesmo, tentar a sorte no cassino $$$.
          </p>

        </div>

        <div className='resort'>
          <h2>Resort</h2>
          
          <img src={resort1} alt='resort'/>
          <p>
            Viajar para um resort é uma forma de aproveitar a natureza, existem opções em praias, fazendas e montanhas.
            Sem abdicar do conforto de um excelente hotel.
          </p>
        </div>

        </div>
      </div>
      <div className='footer'>
        <footer>
        <p>Desenvolvido por <strong>Douglas Lima</strong></p>
        <p>Contato</p>
        <a href="https://github.com/Douglaslima93"><img src={github} alt="github"/></a>
        <a href="https://www.linkedin.com/in/douglas-lima-95073aa2/"><img src={linkedin} alt="linkedin"/></a>
        <a href='+55 15 996013651'><img src={whatsapp} alt="whatsapp"/></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
