import logo from "./assets/Logorepet.svg";
import bkg1 from "./assets/fundo-tela1.svg";
import card1 from "./assets/Heart.png";
import card2 from "./assets/caixasuprimentos.png";
import card3 from "./assets/Megaphone.png";
import card4 from "./assets/Communication.png";
import linkcards from "./assets/linkcards.png";
import fundoSec3 from "./assets/fundosec3.png";
import fundoSec4 from "./assets/fundosec4.png";
import wpp from "./assets/wpp.png";
import gmail from "./assets/gmail.png";
import insta from "./assets/insta.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ul className="App-list">
            <a href="#sobre">
              <li className="App-list-iten">Quem somos?</li>
            </a>
            <a href="#Funcao">
              <li className="App-list-iten">Como funciona?</li>{" "}
            </a>
            <a href="#quem">
              <li className="App-list-iten">Para quem é o RePet?</li>
            </a>
            <a href="#benef">
              <li className="App-list-iten">Beneficios</li>
            </a>
            <li className="App-list-iten">Contato</li>
          </ul>
        </div>
      </header>

      <div className="App-sec1">
        <div className="App-sec1 div">
          <h1>
            Conectando Abrigos, Adotantes e Petshops para um Futuro Melhor!
          </h1>
          <a href="#sobre">
            <button>Conheça</button>
          </a>
        </div>
        <img src={bkg1} className="App-logo" alt="logo" />
      </div>

      <div className="Sobre" id="sobre">
        <h2>Quem somos? </h2>
        <div>
          <p>
            Repet é um projeto pensado para aqueles apaixonados por animais,
            tendo em vista a pouca visibilidade de alguns abrigos de resgate a
            animais em situações grave, pensamos em algo que conecte as pessoas
            que precisam de ajuda, com as pessoas que querem ajudar esses
            lugares.
          </p>
          <p>
            Com o Repet, ajudamos você a conhecer um novo melhor amigo, adote um
            animalzinho que busca um novo lar, encontre produtos de qualidade,
            conecte-se com outros tutores e ajude abrigos a cuidarem de animais
            resgatados e em outras necessidades. O Repet é a sua comunidade
            amiga dos pets completa, oferecendo soluções para todas as etapas da
            sua jornada com seu amiguinho.
          </p>
        </div>
        <img src={fundoSec3} alt="" />
      </div>

      <div className="App-sec2" id="Funcao">
        <h2>Como funciona?</h2>
        <h4>Adote, ajude e transforme vidas</h4>

        <div className="Sec2-card">
          <div className="App-sec2-cards">
            <img src={card1} alt="" />
            <h3>Você doa</h3>
            <p>
              {" "}
              Doe dinheiro diretamente para abrigos parceiros através de métodos
              de pagamento seguros. Cada transação é registrada e você pode
              acompanhar seu impacto.
            </p>
          </div>
          <img className="linkCard" src={linkcards} alt="" />

          <div className="App-sec2-cards">
            <img src={card2} alt="" />

            <h3>Doação de Mantimentos e Serviços</h3>
            <p>
              {" "}
              Ofereça comida, brinquedos e outros suprimentos essenciais ou
              agende serviços como banho e tosa para os abrigos.
            </p>
          </div>

          <img className="linkCard" src={linkcards} alt="" />

          <div className="App-sec2-cards">
            <img src={card3} alt="" />
            <h3>Comunicação Direta com Abrigos</h3>
            <p>
              {" "}
              Tire dúvidas, conheça os pets disponíveis para adoção e agende sua
              visita diretamente pela plataforma.
            </p>
          </div>
          <img className="linkCard" src={linkcards} alt="" />

          <div className="App-sec2-cards">
            <img src={card4} alt="" />
            <h3>Feedback Contínuo</h3>
            <p>
              {" "}
              Compartilhe suas experiências e sugestões para melhorarmos
              continuamente.
            </p>
          </div>
        </div>
      </div>
      <div className="App-sec3" id="quem">
        <h2>Pra quem é o RePet?</h2>
        <h4>Adote, ajude e transforme vidas</h4>
        <div className="App-sec3-cards">
          <div className="App-sec3-card">
            <h2>Abrigos</h2>
            <h6>Divulgue seus pets</h6>
            <p>
              Mostre os animais que estão prontos para encontrar um lar amoroso.
            </p>
            <h6>Receba doações</h6>
            <p>
              Facilitamos doações financeiras, mantimentos e serviços para os
              animais que mais precisam.
            </p>
            <h6>Melhore a Saúde dos Animais</h6>
            <p>
              Conecte-se com petshops parceiros para garantir os cuidados
              necessários, como vacinação e tratamentos especiais.
            </p>
          </div>
          <div className="App-sec3-card">
            <h2>Adotantes</h2>
            <h6>Encontre Seu Novo Amigo</h6>
            <p>
              Navegue pelos pets disponíveis para adoção e escolha aquele que
              melhor se encaixa no seu lar.{" "}
            </p>
            <h6>Ajude de Diferentes Formas</h6>
            <p>
              Além de adotar, você pode doar mantimentos, dinheiro ou serviços
              para os abrigos parceiros.{" "}
            </p>
            <h6>Acompanhamento e Suporte</h6>
            <p>
              Receba dicas e cuidados para o seu novo pet com a ajuda de
              parceiros de confiança.{" "}
            </p>
          </div>
          <div className="App-sec3-card">
            <h2>Petshops parceiros</h2>
            <h6>Divulgue Seus Produtos e Serviços</h6>
            <p>
              Ofereça itens essenciais para pets recém-adotados e ajude os novos
              donos com serviços como banho, tosa e consultas veterinárias.{" "}
            </p>
            <h6>Ofertas Exclusivas</h6>
            <p>
              Ofereça descontos especiais para produtos e serviços, incentivando
              a adoção responsável e a saúde dos pets.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="App-sec4" id="benef">
        <div className="App-sec4-box">
          <h2>Beneficios de usar o RePet</h2>
          <ul>
            <li>
              Conexão Direta: Encontre e se comunique diretamente com abrigos e
              petshops.
            </li>
            <li>
              Transparência: Acompanhe suas doações e veja o impacto positivo
              que elas causam.
            </li>
            <li>
              Facilidade: Tudo o que você precisa em um só lugar – adote, doe e
              ajude de forma prática e rápida.{" "}
            </li>
          </ul>
          <img src={fundoSec4} alt="" />
        </div>
      </div>
      <div className="App-sec5">
        <h4>Faça parte da mudança!</h4>
        <h6>Seja um Adotante, um Parceiro ou um Doador e Transforme Vidas!</h6>
        <div className="boxctt">
        <a href="https://wa.me/61983429904" className="contato">
          Entre em contato
        </a>
        </div>
        <h5>
          repet.empresa@gmail.com
        </h5>
      </div>
      <div className="Footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>© 2024 RePet. Todos os direitos reservados.</p>
        <div>
          <img src={gmail} alt="logo" />
          <img src={wpp} alt="logo" />
          <img src={insta} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
