// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AllGamesPage from './components/AllGamesPage';
import ContactPage from './components/ContactPage'; // Importe a página de contato
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Quando o conteúdo da página terminar de carregar, pare de exibir o spinner
    window.addEventListener('load', handleLoad);

    return () => {
      // Remova o ouvinte de evento quando o componente é desmontado
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-games" element={<AllGamesPage />} />
            <Route path="/contact" element={<ContactPage />} /> {/* Adicione a rota para a página de contato */}
          </Routes>
        </div>
        <Footer />
      </Router>
      {loading && <Spinner />}
    </div>
  );
}

export default App;
