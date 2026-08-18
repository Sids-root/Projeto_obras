import "./Produtos.css";

export default function Produtos(){
    return(
        <>
            <h2 className="produtos-section-title">Projetos em destaque</h2>
            <section className="produtos">
                <div className="produtos-cards">
                    <div className="produto-card">
                        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" alt="Imagem do Residencial Park Ville" />
                        <h3 className="produto-card-title">Residencial Park Ville</h3>
                        <p className="produto-card-description">Residencial de alto padrão com 120 unidades</p>
                    </div>
                    <div className="produto-card">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Imagem do Centro Empresarial" />
                        <h3 className="produto-card-title">Centro Empresarial</h3>
                        <p className="produto-card-description">Espaços comerciais de alto padrão com 50 unidades</p>
                    </div>
                    <div className="produto-card">
                        <img src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=800&q=80" alt="Imagem do Galpão Industrial" />
                        <h3 className="produto-card-title">Galpão Industrial</h3>
                        <p className="produto-card-description">Galpão de alto padrão com 5.000 m² de área construída</p>
                    </div>
                </div>
            </section>
            
        </>
    )
}