import React from "react";

import "./styles.css";

function Navigation() {
  return (
    <>
      <section className="navigation">
        <p className="section-title">Menu</p>
        <div className="cards">
          <div className="card card-large">
            <p className="card-action">Veja alguns</p>
            <p className="card-title">Projetos</p>
            <p className="card-description">
              Aqui estão alguns projetos que eu desenvolvi ou participei do
              desenvolvimento.
            </p>
          </div>
          <div className="card card-medium">
            <p className="card-action">Veja meu</p>
            <p className="card-title">Blog</p>
            <p className="card-description">
              Algumas postagens como tutoriais, dicas de programação e mais
            </p>
          </div>
          <div className="card card-medium">
            <p className="card-action">Veja alguns</p>
            <p className="card-title">Drops</p>
            <p className="card-description">
              Postagens curtas com dicas e truques de código, <br />
              práticas recomendadas, ferramentas e muito mais
            </p>
          </div>
          <div className="card card-medium">
            <p className="card-action">Fale comigo</p>
            <p className="card-title">Contato</p>
            <p className="card-description">
              Você tem algum projeto em mente? Então entre em contato
              <br />e vamos fazer acontecer!
            </p>
          </div>
          <div className="card card-medium">
            <p className="card-action">Veja meu</p>
            <p className="card-title">Currículo</p>
            <p className="card-description">
              Descubra mais sobre mim visualizando meu currículo
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navigation;
