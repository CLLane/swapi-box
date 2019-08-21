import React from 'react';
import './Card.css';

const Card = ({ name, homeworld, species, population }) => {

  return (
    <div>
      <h1>{name}</h1>
      <p>{homeworld}</p>
    </div>
  )
};

export default Card;