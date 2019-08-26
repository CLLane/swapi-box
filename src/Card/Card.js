import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import favorite from "../Images/favorite.svg";
import isNotFavorite from "../Images/isNotFavorite.svg";

const Card = ({ id, name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers, isFavorite, toggleFav, type}) => {
  const toggle = isFavorite ? favorite : isNotFavorite;
  return (
    <div>
    {/* <Link to={`${}`} */}
    <section className="card">
      <img src={toggle} alt='' className='favorite-img' onClick={() => toggleFav(id, type)}/>
      <h1 className="small-cards-h1">{name}</h1>
        {homeworld && <h4 className="small-card-labels">Homeworld: {homeworld}</h4>}
        {species && <h4 className="small-card-labels">Species: {species}</h4>}
        {population && <h4 className="small-card-labels">Population: {population}</h4>}
        {terrain && <h4 className="small-card-labels">Terrain: {terrain}</h4>}
        {climate && <h4 className="small-card-labels">Climate: {climate}</h4>}
        {residents && <h4 className="small-card-labels">Residents: {residents}</h4>}
        {model && <h4 className="small-card-labels">Model: {model}</h4>}
        {vehicleClass && <h4 className="small-card-labels">Vehicle Class: {vehicleClass}</h4>}
        {numberOfPassengers && <h4 className="small-card-labels">Number of Passengers: {numberOfPassengers}</h4>}
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