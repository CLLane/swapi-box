import React from 'react';
import PropTypes from 'prop-types';
import './CardDisplay.css';

const CardDisplay = ({  name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers }) => {

  return (
    <div className="single-card">
      {/* <Link to={`${}`} */}
      <section className="big-card">
        <h1>{name}</h1>
        <p>{homeworld }</p>
        <p>{species}</p>
        <p>{population}</p>
        <p>{terrain}</p>
        <p>{climate}</p>
        <p>{residents}</p>
        <p>{model}</p>
        <p>{vehicleClass}</p>
        <p>{numberOfPassengers}</p>
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