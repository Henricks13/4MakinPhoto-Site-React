// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AllGamesPage from './components/AllGamesPage';
import Spinner from './components/Spinner'; // Importe o componente Spinner
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simula um tempo de carregamento de 1 segundo
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          {loading ? (
            <Spinner />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/all-games" element={<AllGamesPage />} />
            </Routes>
          )}
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
