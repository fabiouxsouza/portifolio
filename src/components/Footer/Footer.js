import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    /* Container principal do footer - bg escuro com padding */
    <footer className="w-full bg-[#0F0F0F] text-white py-12 px-4 md:px-8">
      {/* Container interno com largura máxima */}
      <div className="max-w-6xl mx-auto">
        
        {/* Grade de 3 colunas (empilhadas em mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          
          {/* Coluna 1: Sobre */}
          <div className="space-y-4">
            {/* Título com efeito de brilho sutil */}
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Fábio Souza
            </h2>
            {/* Texto sobre - espaçamento e cor suave */}
            <p className="text-gray-300 leading-relaxed">
              Desenvolvedor Front-end especializado em React e Next.js, 
              transformando ideias em experiências digitais de alto impacto.
            </p>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Navegação Rápida</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  {/* Link com transição suave e cor temática */}
                  <a 
                    href="#inicio" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 block py-1"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a 
                    href="#projetos" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 block py-1"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a 
                    href="#contato" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 block py-1"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Coluna 3: Redes sociais */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Conecte-se</h3>
            {/* Container de ícones com espaçamento generoso */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/fabiouxsouza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                {/* Ícone aumentado e com efeito sutil */}
                <FaGithub className="text-3xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-3xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:contato@fabiosouza.com"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                aria-label="E-mail"
              >
                <FaEnvelope className="text-3xl hover:scale-110 transition-transform" />
              </a>
            </div>
            {/* Texto de disponibilidade */}
            <p className="text-gray-300 pt-2">
              Disponível para colaborações e novos projetos.
            </p>
          </div>
        </div>

        {/* Divisor e rodapé inferior */}
        <div className="border-t border-gray-800 pt-8 text-center">
          {/* Texto de direitos autorais */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Fabio Souza. Todos os direitos reservados.
          </p>
          {/* Créditos de desenvolvimento */}
          <p className="text-gray-500 text-xs mt-2">
            Desenvolvido com React, Vite e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;