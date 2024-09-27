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
            <li className="App-list-iten">Quem somos?</li>
            <li className="App-list-iten">Como funciona?</li>
            <li className="App-list-iten">Para quem é o RePet?</li>
            <li className="App-list-iten">Beneficios</li>
            <li className="App-list-iten">Contato</li>
          </ul>
        </div>
      </header>

      <div className="App-sec1">
        <div className="App-sec1 div">
          <h1>
            Conectando Abrigos, Adotantes e Petshops para um Futuro Melhor!
          </h1>
          <button>Conheça</button>
        </div>
        <img src={bkg1} className="App-logo" alt="logo" />
      </div>

      <div className="App-sec2">
        <h2>Como funciona?</h2>
        <h3>Adote, ajude e transforme vidas</h3>

        <div className="Sec2-card">
          <div className="App-sec2-cards">
            <img src={card1} alt="" />
            <h2>Você doa</h2>
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

            <h2>Doação de Mantimentos e Serviços</h2>
            <p>
              {" "}
              Ofereça comida, brinquedos e outros suprimentos essenciais ou
              agende serviços como banho e tosa para os abrigos.
            </p>
          </div>

          <img className="linkCard" src={linkcards} alt="" />

          <div className="App-sec2-cards">
            <img src={card3} alt="" />
            <h2>Comunicação Direta com Abrigos</h2>
            <p>
              {" "}
              Tire dúvidas, conheça os pets disponíveis para adoção e agende sua
              visita diretamente pela plataforma.
            </p>
          </div>
          <img className="linkCard" src={linkcards} alt="" />

          <div className="App-sec2-cards">
            <img src={card4} alt="" />
            <h2>Feedback Contínuo</h2>
            <p>
              {" "}
              Compartilhe suas experiências e sugestões para melhorarmos
              continuamente.
            </p>
          </div>
        </div>
      </div>
      <div className="App-sec3">
        <h1>Pra quem é o RePet?</h1>
        <h5>Adote, ajude e transforme vidas</h5>
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
        <img src={fundoSec3} alt="" />
      </div>

      <div className="App-sec4">
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
        <button>Entre em contato</button>
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
