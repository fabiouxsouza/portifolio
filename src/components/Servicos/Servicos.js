import React from 'react';
import './Servicos.css';

const Servicos = () => {
  const servicos = [
    { id: 1, titulo: 'Desenvolvimento Front-End', descricao: 'Criação de interfaces modernas e responsivas.' },
    { id: 2, titulo: 'Otimização de Performance', descricao: 'Melhoria da velocidade e eficiência de sites.' },
    { id: 3, titulo: 'Acessibilidade Web', descricao: 'Sites acessíveis para todos os usuários.' },
  ];

  return (
    <section className="servicos">
      <h2>Serviços</h2>
      <div className="servicos-lista">
        {servicos.map((servico) => (
          <div key={servico.id} className="servico-card">
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicos;