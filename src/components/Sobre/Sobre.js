import React from 'react';
import './Sobre.css';

const Sobre = () => {
  return (
    <section className="sobre">
      <h2>Sobre Mim</h2>
      <p>
        Sou um web designer front-end com foco em performance, acessibilidade e React. 
        Ajudo empresas a criar interfaces modernas e funcionais que encantam os usuários.
      </p>
      <div className="tecnologias">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
      </div>
    </section>
  );
};

export default Sobre;