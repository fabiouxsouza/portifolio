import React from 'react';
import { motion } from 'framer-motion'; // Importe o Framer Motion
import './Portfolio.css';

const Portfolio = () => {
  const projetos = [
    {
      id: 1,
      titulo: 'E-commerce com +30% de conversão em mobile',
      descricao: 'React.js · Styled Components · Otimizado para SEO.',
      imagem: 'url-da-imagem-1',
      link: 'https://projeto1.com',
    },
    {
      id: 2,
      titulo: 'Projeto 2',
      descricao: 'Descrição detalhada do projeto 2.',
      imagem: 'url-da-imagem-2',
      link: 'https://projeto2.com',
    },
    {
      id: 3,
      titulo: 'Projeto 3',
      descricao: 'Descrição detalhada do projeto 3.',
      imagem: 'url-da-imagem-3',
      link: 'https://projeto3.com',
    },
  ];

  // Variantes de animação
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre as animações dos filhos
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="portfolio">
      <h2>Portfólio</h2>
      <motion.div
        className="projetos"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {projetos.map((projeto) => (
          <motion.div
            key={projeto.id}
            className="projeto-card"
            variants={fadeInUp}
          >
            <img src={projeto.imagem} alt={projeto.titulo} className="projeto-imagem" />
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="projeto-link">
              Ver mais
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;