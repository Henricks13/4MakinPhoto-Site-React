import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* Conteúdo da página */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
