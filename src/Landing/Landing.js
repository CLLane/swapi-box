import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = ({film}) => {
  console.log(film);
  return (
    <section>
      {film}
      <NavLink to="/" className="nav">
        May the Force be with you
      </NavLink>
    </section>
  );
}



export default Landing;