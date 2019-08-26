import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import Card from '../Card/Card.js'
import './Container.css';

const Container = ({data, type, toggleFav}) => {
  console.log("data", data)
  const allInfo = data.map((attr, i) => {
    return (
    <NavLink to={`/${type}/${attr.id}`} key={attr.id}>
    <Card 
    id={i + 1}
    key={attr.name + Date.now()} 
    name={attr.name} 
    homeworld={attr.homeworld} 
    species={attr.species} 
    population={attr.population} 
    terrain={attr.terrain} 
    climate={attr.climate} 
    residents={attr.residents} 
    model={attr.model} 
    vehicleClass={attr.vehicleClass} 
    numberOfPassengers={attr.numberOfPassengers}
    isFavorite={attr.isFavorite}
    toggleFav={toggleFav}
    type={type}
    />
    </NavLink>
    )
  })

  return (
    <div>
      <section className="card-container">{allInfo}</section>
    </div>
  )
}

export default Container;

Container.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  toggleFav: PropTypes.func.isRequired,
}