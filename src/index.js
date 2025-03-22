import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import App from './App'; // Importa o componente principal

// Seleciona o elemento raiz do HTML
const container = document.getElementById('root');

// Cria uma raiz para renderizar o aplicativo
const root = createRoot(container);

// Renderiza o aplicativo dentro da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);