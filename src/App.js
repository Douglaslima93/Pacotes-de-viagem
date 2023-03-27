import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


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
          <Carousel fade>
            <Carousel.Item>
          <img  src='./assets/img/praia1.jpg'/>
            </Carousel.Item>
            <Carousel.Item>
              <img  src='./assets/img/praia2.jpg'/>
            </Carousel.Item>
            </Carousel>
          
          <p>
            Já imaginou curtir a sombra dos coqueiros enquanto recebe raios dourados de sol e se refresca no mar 
            quentinho de ondas calmas? Não pense mais, vá curtir o litoral agora!
          </p>

        </div>

        <div className='cruzeiro'>
          <h2>Cruzeiro</h2>
          <Carousel fade>
            <Carousel.Item>
          <img src='./assets/img/cruzeiros1.jpg'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='./assets/img/cruzeiros2.jpg'/>
          </Carousel.Item>
          </Carousel>
          <p>
            Em uma viagem de navio, basta entrar, desfazer as malas e relaxar!
            Você só precisa escolher o destino e o tipo de cabine. Durante a viagem os navios têm
            programação para todos os gostos e idades a todo o tempo. Têm espaços para crianças se
            divertirem, enquanto você poderá relaxar em um SPA ou até mesmo, tentar a sorte no cassino $$$.
          </p>
          
        </div>

        <div className='resort'>
          <h2>Resort</h2>
          <Carousel fade>
            <Carousel.Item>
          <img src='./assets/img/resort1.jpg'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='./assets/img/resort2.jpg'/>
          </Carousel.Item>
          </Carousel>
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
        <a href='https://www.linkedin.com/in/douglas-lima-95073aa2/'><img src='./assets/img/linkedin.png'/></a>
        <a href='https://github.com/Douglaslima93'><img src='./assets/img/github.png'/></a>
        <a href='https://api.whatsapp.com/send?phone=+5515996013651>'><img src='./assets/img/whatsapp.png'/></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
