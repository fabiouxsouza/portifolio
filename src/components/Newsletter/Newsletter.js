import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState(''); // Estado para armazenar o e-mail

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    alert(`Obrigado por se inscrever! E-mail: ${email}`);
    setEmail(''); // Limpa o campo após o envio
  };

  return (
    <section id="newsletter" className="newsletter">
      <h2>Assine Minha Newsletter</h2>
      <p>
        Receba as últimas novidades e dicas exclusivas sobre Micro-SaaS e Produtos Digitais, e ainda
        ganhe um e-book grátis!
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Digite seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Inscrever Grátis</button>
      </form>
      <p className="disclaimer">
        * Você receberá um e-book grátis ao se cadastrar na minha newsletter.
      </p>
    </section>
  );
};

export default Newsletter;