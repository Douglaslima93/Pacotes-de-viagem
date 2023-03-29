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
          <p>Viajar e sempre bom, ainda mais com pessoas especiais. <br></br> Das três opções abaixo, qual você prefere?</p>
        </div>

      <div className='pacotes'>

        <div className='praia'>
          <h2>Praia</h2>
          <Carousel fade>
            
            <Carousel.Item>
          <img  className='d-block w-100' src='./assets/img/praia1.jpg' id='img'/>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src='./assets/img/praia2.jpg'/>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src='./assets/img/praia3.jpg'/>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src='./assets/img/praia4.jpg'/>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src='./assets/img/praia5.jpg'/>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src='./assets/img/praia6.jpg'/>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src='./assets/img/praia7.jpg'/>
            </Carousel.Item>

            <Carousel.Item>
              <img className='d-block w-100' src='./assets/img/praia8.jpg'/>
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
          <img className='d-block w-100' src='./assets/img/cruzeiros1.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/cruzeiros2.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/cruzeiros3.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/cruzeiros4.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/cruzeiros5.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/cruzeiros6.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/cruzeiros7.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/cruzeiros8.jpg'/>
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
          <img className='d-block w-100' src='./assets/img/resort1.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/resort2.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/resort3.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/resort4.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/resort5.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/resort6.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/resort7.jpg'/>
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src='./assets/img/resort8.jpg'/>
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
        <div className='icons'>

        <a href='https://www.linkedin.com/in/douglas-lima-95073aa2/'><img src='./assets/img/linkedin.png'/></a>
        <a href='https://github.com/Douglaslima93'><img src='./assets/img/github.png'/></a>
        <a href='https://api.whatsapp.com/send?phone=+5515996013651>'><img src='./assets/img/whatsapp.png'/></a>

        </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
