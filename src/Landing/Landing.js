import React from 'react';
import PropTypes from 'prop-types';
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

Landing.propTypes = {
  film: PropTypes.array,
}