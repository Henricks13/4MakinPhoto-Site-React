// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AllGamesPage from './components/AllGamesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe BrowserRouter, Routes e Route

function App() {
  return (
    <div className="App">
      <Router> {/* Use o BrowserRouter */}
        <Header />
        <div className="content">
          <Routes> {/* Use o componente Routes */}
            <Route path="/" element={<HomePage />} /> {/* Use o componente Route como filho de Routes */}
            <Route path="/all-games" element={<AllGamesPage />} /> {/* Use o componente Route como filho de Routes */}
          </Routes>
        </div>
        <Footer />
      </Router> {/* Feche o BrowserRouter */}
    </div>
  );
}

export default App;
