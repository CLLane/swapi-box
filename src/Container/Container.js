import React from 'react';
import Card from '../Card/Card.js'
import './Container.css';

const Container = ({data}) => {

  const allInfo = data.map(attr => {
    return <Card key={attr.name + Date.now()} name={attr.name} homeworld={attr.homeworld} species={attr.species} population={attr.population} terrain={attr.terrain} climate={attr.climate} residents={attr.residents} model={attr.model} vehicleClass={attr.vehicleClass} numberOfPassengers={attr.numberOfPassengers}/>
  })

  return (
    <div>
      <section>{allInfo}</section>
    </div>
  )
}

export default Container;