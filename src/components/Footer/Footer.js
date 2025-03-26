import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // Importe o arquivo CSS do Footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">Fábio Souza</h2>
          <p className="footer-description">
            Desenvolvedor Front-end especializado em React e Next.js, transformando
            ideias em experiências digitais de alto impacto.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-nav-title">Navegação Rápida</h3>
          <nav>
            <ul className="footer-nav-list">
              <li>
                <a href="#inicio" className="footer-nav-link">
                  Início
                </a>
              </li>
              <li>
                <a href="#projetos" className="footer-nav-link">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contato" className="footer-nav-link">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h3 className="footer-connect-title">Conecte-se</h3>
          <div className="footer-social-icons">
            <a
              href="https://github.com/fabiouxsouza"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contato@fabiosouza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="E-mail"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="footer-availability">
            Acesse minhas redes sociais.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Fabio Souza. Todos os direitos reservados.
        </p>
        <p className="footer-tech">
          Desenvolvido com React e Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;