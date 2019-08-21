import React from 'react';
import Card from '../Card/Card.js'
import './Container.css';

const Container = ({people, planets, vehicles, films}) => {

  const peopleInfo = people.map(person => {
    return <Card key={person.name + Date.now()} name={person.name} homeworld={person.homeworld} species={person.species} population={person.population}/>
  })

  const planetsInfo = planets.map(planet => {
    return <Card key={planet.name + Date.now()} name={planet.name} terrain={planet.terrain} population={planet.population} climate={planet.climate} residents={planet.residents}/>
  })

  const vehiclesInfo = vehicles.map(vehicle => {
    return <Card key={vehicle.name + Date.now()} name={vehicle.name} model={vehicle.model} vehicleClass={vehicle.vehicleClass} numberOfPassengers={vehicle.numberOfPassengers}/>
  })

  return (
    <div>
      <section>{peopleInfo}</section>
      <section>{planetsInfo}</section>
      <section>{vehiclesInfo}</section>
    </div>
  )
}

export default Container;