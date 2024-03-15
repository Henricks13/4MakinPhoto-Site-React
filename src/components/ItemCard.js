import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemCard.css'; // Importar o arquivo CSS para aplicar estilos

const ItemCard = ({ title, imageSrc, description }) => {
  return (
    <div className="col-md-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* Adicionar a classe custom-button para aplicar os estilos de hover */}
          <Button variant="primary" className="custom-button">Ver fotos</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
