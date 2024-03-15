import React from 'react';
import ItemCard from './ItemCard';

const AllGamesPage = () => {
  // Suponha que você tenha uma lista de todos os jogos
  const allGames = [
    { title: "Flamengo x Santos", imageSrc: "https://via.placeholder.com/200x200", description: "Descrição do jogo 1" },
    { title: "Brasilia x Toque de Classe", imageSrc: "https://via.placeholder.com/200x200", description: "Descrição do jogo 2" },
    { title: "Planalto x Santos", imageSrc: "https://via.placeholder.com/200x200", description: "Descrição do jogo 3" },
    { title: "Flamengo x Fluminense", imageSrc: "https://via.placeholder.com/200x200", description: "Descrição do jogo 4" },
    // Adicione mais jogos conforme necessário
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {allGames.map((game, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"> {/* Define o layout responsivo usando classes do Bootstrap */}
            <ItemCard
              title={game.title}
              imageSrc={game.imageSrc}
              description={game.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllGamesPage;
