// MyCarousel.js

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="d-none d-md-block">Explorando o mundo do futebol através da fotografia.</h3>
          <p>Momentos inesquecíveis capturados na beleza do esporte.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
