import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sobre from './components/Sobre/Sobre';
import Portfolio from './components/Portfolio/Portfolio';
import Servicos from './components/Servicos/Servicos';
import Contato from './components/Contato/Contato';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <Hero />
        <Sobre />
        <Portfolio />
        <Servicos />
        <Contato />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;