import React from 'react';
import './Sobre.css';

const Sobre = () => {
  return (
    <section className="about">
      <div className="about-content">
        {/* Foto (Substitua pelo seu arquivo de imagem) */}
        <img src="components/assets/PERFIL.png" alt="Fábio Souza" className="about-photo" />

        {/* Título Principal */}
        <h2 className="about-title">
          Fábio Souza
        </h2>

        {/* Descrição Detalhada */}
        <p className="about-description">
          Sou um desenvolvedor Front-End apaixonado por criar experiências web
          incríveis. Com expertise em React.js, Next.js e UI/UX Design, meu objetivo é
          transformar ideias em interfaces digitais que sejam bonitas, funcionais e
          acessíveis.
        </p>

        <p className="about-description">
          Minhas principais habilidades incluem:
        </p>

        {/* Lista de Habilidades */}
        <ul className="about-skills-list">
          <li className="about-skill-item">React.js</li>
          <li className="about-skill-item">Next.js</li>
          <li className="about-skill-item">JavaScript (ES6+)</li>
          <li className="about-skill-item">HTML5</li>
          <li className="about-skill-item">CSS3</li>
          <li className="about-skill-item">UI/UX Design</li>
          {/* Adicione mais habilidades conforme necessário */}
        </ul>

        {/* Proposta de Valor */}
        <p className="about-value-proposition">
          Se você busca um profissional comprometido com a qualidade, que entrega
          soluções personalizadas e que se preocupa com a experiência do usuário,
          vamos conversar! Estou pronto para fazer parte do seu próximo projeto.
        </p>
      </div>
    </section>
  );
};

export default Sobre;