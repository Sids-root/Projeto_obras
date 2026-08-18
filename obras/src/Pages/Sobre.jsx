import "./Sobre.css"

export default function Sobre(){
    return(
        <>
            
            
            <section class="quem-somos">

                <div class="quem-somos__imagem">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="Img" />
                </div>
                
                <div class="quem-somos__conteudo">
                    <span class="quem-somos__eyebrow">Quem Somos</span>
                
                    <h2 class="quem-somos__titulo">
                    Tradição e Inovação em <span>Cada Projeto</span>
                    </h2>
                
                    <p class="quem-somos__texto">
                    A Traço Construções nasceu da paixão por transformar espaços e construir sonhos.
                    Com uma equipe altamente qualificada e comprometida, atuamos em todos os segmentos
                    da construção civil, desde residências de alto padrão até grandes empreendimentos
                    comerciais e industriais.
                    </p>
                
                    <p class="quem-somos__texto">
                    Nossa missão é entregar obras que superam expectativas, combinando técnica apurada,
                    materiais de primeira qualidade e um atendimento personalizado. Cada projeto recebe
                    atenção única, garantindo resultados excepcionais.
                    </p>
                
                    <div class="quem-somos__stats">
                    <div class="stat-card">
                        <div class="stat-card__numero">250+</div>
                        <div class="stat-card__label">Projetos Entregues</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-card__numero">50+</div>
                        <div class="stat-card__label">Profissionais</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-card__numero">15+</div>
                        <div class="stat-card__label">Anos de Experiência</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-card__numero">100%</div>
                        <div class="stat-card__label">Compromisso</div>
                    </div>
                    </div>
                </div>
                
            </section>
            
            
        </>
    )
}