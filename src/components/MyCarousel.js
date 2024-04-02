// MyCarousel.js

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'; // Importe o componente Link
import wallpaper1 from '../assets/wallpaper.png'; // Importe a imagem

function MyCarousel() {
  return (
    <Link to="/contact"> {/* Adicione um Link em torno do Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wallpaper1} // Use a variável da imagem como valor do src
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </Link>
  );
}

export default MyCarousel;
