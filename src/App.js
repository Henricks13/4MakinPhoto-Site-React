// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; // Importe o componente HomePage
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <HomePage /> {/* Inclua o componente HomePage aqui */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
