import "./Servicos.css";
export default function Servicos() {
  return (
    <>
      <section class="services section-padding" id="servicos">
        <div class="container">
          <div class="section-header">
            <p class="label">Nossos Serviços</p>
            <h2>
              Soluções Completas em <span class="gold-text">Construção</span>
            </h2>
          </div>
          <div class="services-grid">
            <div class="service-card">
              <svg class="icon-svg" viewBox="0 0 24 24">
                <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
              </svg>
              <h3>Construção Residencial</h3>
              <p>
                Casas e edifícios residenciais com acabamento premium e atenção
                a cada detalhe.
              </p>
            </div>
            <div class="service-card">
              <svg class="icon-svg" viewBox="0 0 24 24">
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zM10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5M4 15v-3a6 6 0 0 1 6-6h0M14 6a6 6 0 0 1 6 6v3" />
              </svg>
              <h3>Construção Comercial</h3>
              <p>
                Espaços comerciais funcionais e modernos para impulsionar o seu
                negócio.
              </p>
            </div>
            <div class="service-card">
              <svg class="icon-svg" viewBox="0 0 24 24">
                <path d="M15 12l-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9M17.64 15L22 10.64M20.91 11.7l-1.25-1.25M13.35 8.65l-1.25-1.25M15.5 5.5L17 4M17 10l1.5-1.5" />
              </svg>
              <h3>Reformas e Ampliações</h3>
              <p>
                Renovação completa de ambientes com planejamento e execução
                impecáveis.
              </p>
            </div>
            <div class="service-card">
              <svg class="icon-svg" viewBox="0 0 24 24">
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" />
              </svg>
              <h3>Projetos Arquitetônicos</h3>
              <p>
                Elaboração de projetos personalizados com foco em funcionalidade
                e estética.
              </p>
            </div>
            <div class="service-card">
              <svg class="icon-svg" viewBox="0 0 24 24">
                <path d="M18.37 2.63a2.12 2.12 0 0 1 3 3L14 13l-4 1 1-4zM20 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
              </svg>
              <h3>Acabamentos</h3>
              <p>
                Serviços de acabamento fino para garantir a qualidade final da
                obra.
              </p>
            </div>
            <div className="service-card">
              <svg class="icon-svg" viewBox="0 0 24 24">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <h3>Manutenção Predial</h3>
              <p>
                Manutenção preventiva e corretiva para conservar seu patrimônio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
