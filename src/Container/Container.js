import React from 'react';
import { NavLink } from 'react-router-dom'
import Card from '../Card/Card.js'
import './Container.css';

const Container = ({data, type}) => {
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
    />
    </NavLink>
    )
  })

  return (
    <div>
      <section>{allInfo}</section>
    </div>
  )
}

export default Container;