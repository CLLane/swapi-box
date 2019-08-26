import React from 'react';
import PropTypes from 'prop-types';
import './CardDisplay.css';
import favorite from "../Images/favorite.svg";
import isNotFavorite from "../Images/isNotFavorite.svg";

const CardDisplay = ({  id, name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers }) => {
  return (
    <div className="single-card">
      <section className="big-card">
        <h1 className="big-card-h1">{name}</h1>
        {homeworld && <h4 className="big-card-labels">Homeworld: <p className="big-card-values">{homeworld}</p></h4>}
        {species && <h4 className="big-card-labels">Species: <p className="big-card-values">{species}</p></h4>}
        {population && <h4 className="big-card-labels">Population: <p className="big-card-values">{population}</p></h4>}
        {terrain && <h4 className="big-card-labels">Terrain: <p className="big-card-values">{terrain}</p></h4>}
        {climate && <h4 className="big-card-labels">Climate: <p className="big-card-values">{climate}</p></h4>}
        {residents && <h4 className="big-card-labels">Residents: <p className="big-card-values">{residents}</p></h4>}
        {model && <h4 className="big-card-labels">Model: <p className="big-card-values">{model}</p></h4>}
        {vehicleClass && <h4 className="big-card-labels">Vehicle Class: <p className="big-card-values">{vehicleClass}</p></h4>}
        {numberOfPassengers && <h4 className="big-card-labels">Number of Passengers: <p className="big-card-values">{numberOfPassengers}</p></h4>}
      </section>
    </div>
  );
}

export default CardDisplay;

CardDisplay.propTypes = {
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
}