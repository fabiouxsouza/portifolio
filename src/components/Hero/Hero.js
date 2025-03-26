import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css'; // Importe o arquivo CSS do Hero

const Hero = () => {
  // Função para redirecionar para o WhatsApp
  const redirectToWhatsApp = () => {
    const phoneNumber = '5583998958190'; // Substitua pelo seu número
    const message = 'Olá, gostaria de solicitar um orçamento grátis!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Título Principal (Mais Impactante) */}
        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Desenvolvedor Front-End Criativo e Experiente, Focado em Resultados.
        </motion.h1>

        {/* Subtítulo (Descrição Mais Detalhada) */}
        <motion.p
          className="hero-subtitle"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Especializado em React.js, Next.js e UI/UX Design, transformo ideias em
          interfaces web modernas, performáticas e intuitivas. Vamos criar algo incrível
          juntos?
        </motion.p>

        {/* Chamada para Ação (Botões) */}
        <motion.div
          className="hero-buttons"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <button className="hero-button primary" onClick={redirectToWhatsApp}>
            <i className="fab fa-whatsapp"></i> Solicitar Orçamento
          </button>
          <button className="hero-button secondary">
            Ver Projetos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;