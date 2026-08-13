import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Sobre a empresa */}
        <div className="footer-column">
          <h2>TRAÇO <span>CONSTRUÇÕES</span></h2>

          <p>
            Transformando projetos em realidade com qualidade,
            compromisso e excelência em cada detalhe.
          </p>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h3>NAVEGAÇÃO</h3>

          <a href="#">Início</a>
          <a href="#">Sobre nós</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </div>

        {/* Contato */}
        <div className="footer-column">
          <h3>CONTATO</h3>

          <p>📍 Fortaleza - CE</p>
          <p>📞 (85) 99999-9999</p>
          <p>✉️ contato@tracoconstrucoes.com.br</p>
        </div>

        {/* Redes sociais */}
        <div className="footer-column">
          <h3>REDES SOCIAIS</h3>

          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Traço Construções. Todos os direitos reservados.
        </p>

        <p>
          Desenvolvido com tecnologia e dedicação.
        </p>
      </div>

    </footer>
  );
}