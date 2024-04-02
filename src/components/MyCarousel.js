// MyCarousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'; // Importe o componente Link
import wallpaper1 from '../assets/wallpaper.png'; // Importe a imagem

function MyCarousel() {
  return (
    <div>
      <Link to="/contact">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={wallpaper1}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Link>
    </div>
  );
}

export default MyCarousel;
