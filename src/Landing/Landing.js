import React from 'react';
import PropTypes from 'prop-types';
import './Landing.css'

const Landing = ({film}) => {
  console.log('film :', typeof film);
  return (
    <section className='crawler-section'>
      <div className='crawler-div'>
        <p>{film}</p>
      </div>
    </section>
  );
}



export default Landing;

Landing.propTypes = {
  film: PropTypes.string,
}