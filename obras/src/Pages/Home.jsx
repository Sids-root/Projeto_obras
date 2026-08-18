import "./Home.css"
import { Link } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>
    
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-subtitle">
          EXCELÊNCIA EM CONSTRUÇÃO CIVIL
        </span>

        <h1>
          Construindo o Futuro com <span>Solidez</span>
          <br />
          <span>e Elegância</span>
        </h1>

        <p>
          Há mais de 15 anos transformando projetos em realidade.
          Qualidade,
          <br />
          compromisso e inovação em cada obra que entregamos.
        </p>

        <div className="hero-buttons">
          <Link to="/contato" className="btn-primary">
            SOLICITE UM ORÇAMENTO
          </Link>

          <Link to="/Servicos" className="btn-secondary">
            NOSSOS PROJETOS
          </Link>
        </div>

      </div>

    </section>
    
    </>
  );
}