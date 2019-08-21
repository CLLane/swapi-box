import React from 'react';
import Card from '../Card/Card.js'
import './Container.css';

const Container = ({name, homeworld, species, population}) => {


  return (
    <div>
      <Card name={name} homeworld={homeworld} species={species} population={population}/>
    </div>
  )
}

export default Container;