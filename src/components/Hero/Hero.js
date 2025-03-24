import React from 'react';
import { motion } from 'framer-motion'; // Importe o Framer Motion
import './Hero.css';

const Hero = () => {
  // Função para redirecionar para o WhatsApp
  const redirectToWhatsApp = () => {
    const phoneNumber = '5583998958190'; // Substitua pelo seu número
    const message = 'Olá, gostaria de solicitar um orçamento grátis!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Abre o link em uma nova aba
  };

  // Função para rolar a página até a seção de captura de e-mails
  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente
    }
  };

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Links dos e-books */}
        <motion.div
          className="hero-links"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <button className="ebook-link" onClick={scrollToNewsletter}>
            <span className="dot"></span> Resgate agora seu e-book grátis
          </button>
          <button className="ebook-link" onClick={scrollToNewsletter}>
            <i className="fas fa-book"></i> E-book: Como criar seu primeiro Micro-SaaS
          </button>
        </motion.div>

        {/* Título e descrição */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Transformo ideias em experiências digitais fluidas e memoráveis.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Desenvolvedor Front-End | React.js & Next.js | UI/UX Designer.
        </motion.p>

        {/* Botão do WhatsApp */}
        <motion.button
          className="whatsapp-button"
          onClick={redirectToWhatsApp}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <i className="fab fa-whatsapp"></i> Solicite um orçamento grátis
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;