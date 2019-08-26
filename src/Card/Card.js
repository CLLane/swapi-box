import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import favorite from "../Images/favorite.svg";
import isNotFavorite from "../Images/isNotFavorite.svg";

const Card = ({ id, name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers, isFavorite, toggleFav, type}) => {
  const toggle = isFavorite ? favorite : isNotFavorite;
  return (
    <div className="card-list">
    <section className="card">
      <img src={toggle} alt='' className='favorite-img' onClick={() => toggleFav(id, type)}/>
      <h1 className="small-cards-h1">{name}</h1>
        {homeworld && <h4 className="small-card-labels">Homeworld: <p className="small-card-values">{homeworld}</p></h4>}
        {species && <h4 className="small-card-labels">Species: <p className="small-card-values">{species}</p></h4>}
        {population && <h4 className="small-card-labels">Population: <p className="small-card-values">{population}</p></h4>}
        {terrain && <h4 className="small-card-labels">Terrain: <p className="small-card-values">{terrain}</p></h4>}
        {climate && <h4 className="small-card-labels">Climate: <p className="small-card-values">{climate}</p></h4>}
        {residents && <h4 className="small-card-labels">Residents: <p className="small-card-values">{residents}</p></h4>}
        {model && <h4 className="small-card-labels">Model: <p className="small-card-values">{model}</p></h4>}
        {vehicleClass && <h4 className="small-card-labels">Vehicle Class: <p className="small-card-values">{vehicleClass}</p></h4>}
        {numberOfPassengers && <h4 className="small-card-labels">Number of Passengers: <p className="small-card-values">{numberOfPassengers}</p></h4>}
    </section>
    </div>
  )
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.number,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  numberOfPassengers: PropTypes.string,
  isFavorite: PropTypes.bool,
  toggleFav: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}