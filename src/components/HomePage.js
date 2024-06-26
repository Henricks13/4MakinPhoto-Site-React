// HomePage.js
import React from 'react';
import MyCarousel from './MyCarousel';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom'; // Importe o componente Link

const HomePage = () => {
  const cardStyle = { borderColor: '#FF0000', color: '#FF0000' };

  return (
    <div>
      <MyCarousel />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-4">
            <h2>Jogos Recentes</h2>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <ItemCard
              title="Flamengo x Santos"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            >
              <Link to="/game-photos" className="btn btn-primary">Ver Fotos</Link>
            </ItemCard>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <ItemCard
              title="Brasilia x Toque de Classe"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            >
              <Link to="/game-photos" className="btn btn-primary">Ver Fotos</Link>
            </ItemCard>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <ItemCard
              title="Planalto x Santos"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            >
              <Link to="/game-photos" className="btn btn-primary">Ver Fotos</Link>
            </ItemCard>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <ItemCard
              title="Flamengo x Fluminense"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            >
              <Link to="/game-photos" className="btn btn-primary">Ver Fotos</Link>
            </ItemCard>
          </div>
        </div>
      </div>

      <div id="jogos" className="row justify-content-center mt-4">
        <Link to="/all-games" className="col-md-12 col-12 d-block text-decoration-none text-white py-3 bg-danger text-center">
          Mais jogos
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
