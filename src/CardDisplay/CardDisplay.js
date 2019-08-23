import React from 'react';
import './CardDisplay.css';

const CardDisplay = ({  name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers }) => {

  return (
    <div className="single-card">
      {/* <Link to={`${}`} */}
      <section className="big-card">
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
  );
}

export default CardDisplay;