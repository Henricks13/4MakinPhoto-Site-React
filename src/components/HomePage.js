// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import MyCarousel from './MyCarousel';
import ItemCard from './ItemCard';

const HomePage = () => {
  const cardStyle = { borderColor: '#FF0000', color: '#FF0000' };
  const buttonStyle = { backgroundColor: '#FF0000', borderColor: '#FF0000' };
  const hoverStyle = { backgroundColor: '#FF0000', borderColor: '#FF0000' };

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
              buttonColor="#FF0000"
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <ItemCard
              title="Brasilia x Toque de Classe"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              style={cardStyle}
              buttonStyle={buttonStyle}
              hoverStyle={hoverStyle}
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <ItemCard
              title="Planalto x Santos"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              style={cardStyle}
              buttonStyle={buttonStyle}
              hoverStyle={hoverStyle}
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <ItemCard
              title="Flamengo x Fluminense"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              style={cardStyle}
              buttonStyle={buttonStyle}
              hoverStyle={hoverStyle}
            />
          </div>
        </div>
      </div>

      <div id="jogos" className="row justify-content-center mt-4">
        <Link to="/all-games" className="btn btn-primary" style={buttonStyle}>Mais jogos</Link> {/* Use Link em vez de button */}
      </div>
    </div>
  );
}

export default HomePage;
