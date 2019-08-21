import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <header>
      <h1>SWAPIbox</h1>
      <button className="people-button">People</button>
      <button className="planet-button">Planets</button>
      <button className="vehicle-button">Vehicles</button>
      <button className="favorites-button">Favorites</button>
    </header>
  )
}

export default Nav;