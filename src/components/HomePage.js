import React from 'react';
import MyCarousel from './MyCarousel';
import ItemCard from './ItemCard';

const HomePage = () => {
  return (
    <div>
      <MyCarousel />

      {/* Nova seção com itens */}
      <div className="container mt-5">
        {/* Movendo os itens para dentro de uma nova div */}
        <div className="row">
          <div className="row justify-content-center mb-4">
            <div className="col-md-6 text-center">
              <h2>Jogos Recentes</h2>
            </div>
          </div>
          <div className="col-md-3 mb-4 col-12 text-center"> {/* Alterando para ocupar toda a largura e centralizar no celular */}
            <ItemCard
              title="Item 1"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-md-3 mb-4 col-12 text-center"> {/* Alterando para ocupar toda a largura e centralizar no celular */}
            <ItemCard
              title="Item 2"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-md-3 mb-4 col-12 text-center"> {/* Alterando para ocupar toda a largura e centralizar no celular */}
            <ItemCard
              title="Item 3"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-md-3 mb-4 col-12 text-center"> {/* Alterando para ocupar toda a largura e centralizar no celular */}
            <ItemCard
              title="Item 4"
              imageSrc="https://via.placeholder.com/200x200"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
        </div>
        
        
      </div>
      <div className="row justify-content-center mt-4">
          <button className="btn btn-primary">Mais jogos</button>
        </div>
    </div>
  );
}

export default HomePage;
