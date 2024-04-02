// ItemCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Importe o componente Link
import './ItemCard.css'; // Importar o arquivo CSS para aplicar estilos

const ItemCard = ({ title, imageSrc, description }) => {
  return (
    <div className="col-md-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Link to="/game-photos" className="btn btn-primary custom-button">Ver fotos</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
