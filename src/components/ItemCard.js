// ItemCard.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCard = ({ title, imageSrc, description }) => {
  return (
    <div className="col-md-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary">Ver fotos</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
