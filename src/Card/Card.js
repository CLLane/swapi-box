import React from 'react';
import './Card.css';
import favorite from "../Images/favorite.svg";
import isNotFavorite from "../Images/isNotFavorite.svg";

const Card = ({ id, name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers, isFavorite, toggleFav, type}) => {
  console.log('type', type)
  const toggle = isFavorite ? favorite : isNotFavorite;
  return (
    <div>
    {/* <Link to={`${}`} */}
    <section className="card">
      <img src={toggle} alt='' className='favorite-img' onClick={() => toggleFav(id, type)}/>
      <h1>{name}</h1>
      <p>{homeworld || null}</p>
      <p>{species || null}</p>
      <p>{population || null}</p>
      <p>{terrain || null}</p>
      <p>{climate || null}</p>
      <p>{residents || null}</p>
      <p>{model || null}</p>
      <p>{vehicleClass || null}</p>
      <p>{numberOfPassengers || null}</p>
    </section>
    </div>
  )
};

export default Card;