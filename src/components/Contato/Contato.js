import React from 'react';
import './Contato.css';

const Contato = () => {
  return (
    <section className="contato">
      <h2>Vamos construir algo incrível juntos?</h2>
      <form className="contato-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;