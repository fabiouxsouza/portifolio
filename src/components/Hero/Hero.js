import React from 'react';
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

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Links dos e-books */}
        <div className="hero-links">
          <button className="ebook-link" onClick={scrollToNewsletter}>
            <span className="dot"></span> Resgate agora seu e-book grátis
          </button>
          <button className="ebook-link" onClick={scrollToNewsletter}>
            <i className="fas fa-book"></i> E-book: Como criar seu primeiro Micro-SaaS
          </button>
        </div>

        {/* Título e descrição */}
        <h1>Transformando ideias em produtos digitais com JavaScript.</h1>
        <p>
          Cada projeto é único. Eu crio soluções digitais feitas sob medida para atender às suas
          necessidades e objetivos específicos.
        </p>

        {/* Botão do WhatsApp */}
        <button className="whatsapp-button" onClick={redirectToWhatsApp}>
          <i className="fab fa-whatsapp"></i> Solicite um orçamento grátis
        </button>
      </div>
    </section>
  );
};

export default Hero;