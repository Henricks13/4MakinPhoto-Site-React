// components/FloatingImage.js

import React from 'react';
import './FloatingImage.css'; // Importe o estilo para a imagem flutuante

const FloatingImage = ({ src, alt }) => {
  return (
    <div className="floating-image-container">
      <img src={src} alt={alt} className="floating-image" />
    </div>
  );
}

export default FloatingImage;
