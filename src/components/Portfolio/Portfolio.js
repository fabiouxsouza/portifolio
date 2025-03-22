import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projetos = [
    { id: 1, titulo: 'Projeto 1', descricao: 'Descrição do projeto 1.' },
    { id: 2, titulo: 'Projeto 2', descricao: 'Descrição do projeto 2.' },
    { id: 3, titulo: 'Projeto 3', descricao: 'Descrição do projeto 3.' },
  ];

  return (
    <section className="portfolio">
      <h2>Portfólio</h2>
      <div className="projetos">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="projeto-card">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;