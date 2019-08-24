import React from 'react';
import './Landing.css'
import { NavLink } from 'react-router-dom';

const Landing = ({film}) => {
  console.log(film);
  return (
    <section className='crawler-section'>
      <div className='crawler-div'>
        <p>{film}</p>
        {/* <NavLink to="/" className="nav">
          May the Force be with you
        </NavLink> */}
      </div>
    </section>
  );
}



export default Landing;