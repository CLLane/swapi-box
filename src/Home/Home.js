import React from "react";
import { Component } from 'react';
import { NavLink } from 'react-router-dom'
import deathStar from "../Images/deathStarGame.svg";
import yoda from "../Images/Yoda.svg"
import tieFighter from "../Images/TieFighter.svg";
import bobaFet from "../Images/BobaFet.svg";
import stormTrooper from "../Images/StormTrooper.svg"
import explode from "../Images/Explosion.svg";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      count: -1,
      time: ''
    }
  }

  explosion = event => {
    let that = event.target;
    // event.target.src = explode;
    setTimeout(function() {
      that.classList.add("dead");
    }, 250);
    let count = this.state.count
    count++;
    this.setState({count: count})
  }

  startGame = () => {
    let count = this.state.count;
    count++;
    this.setState({ count: count });
  }


  render(){
    if(this.state.count === -1) {
      return (
        <div className='game-prompt'>
          <h1>The Fate of the Galaxy is in your hands!</h1>
          <p>Destroy the Enemies while we prepare Operation Swapi-Box</p>
          <button onClick={() => this.startGame()}>
           Do. Or do not. There is no try.
          </button>
        </div>
      );
    }
    if(this.state.count < 20) {
      return (
        <section className="game-container">
          <img onMouseOver={event => this.explosion(event)} src={tieFighter} alt="" className="baddy-1"></img>
          <img onMouseOver={event => this.explosion(event)} src={bobaFet} alt="" className="baddy-2"></img>
          <img onMouseOver={event => this.explosion(event)} src={deathStar} alt="" className="baddy-3"></img>
          <img onMouseOver={event => this.explosion(event)} src={stormTrooper} alt="" className="baddy-4"></img>
          <img onMouseOver={event => this.explosion(event)} src={tieFighter} alt="" className="baddy-5"></img>
          <img onMouseOver={event => this.explosion(event)} src={bobaFet} alt="" className="baddy-6"></img>
          <img onMouseOver={event => this.explosion(event)} src={deathStar} alt="" className="baddy-7"></img>
          <img onMouseOver={event => this.explosion(event)} src={stormTrooper} alt="" className="baddy-8"></img>
          <img onMouseOver={event => this.explosion(event)} src={tieFighter} alt="" className="baddy-9"></img>
          <img onMouseOver={event => this.explosion(event)} src={bobaFet} alt="" className="baddy-10"></img>
          <img onMouseOver={event => this.explosion(event)} src={deathStar} alt="" className="baddy-11"></img>
          <img onMouseOver={event => this.explosion(event)} src={stormTrooper} alt="" className="baddy-12"></img>
          <img onMouseOver={event => this.explosion(event)} src={tieFighter} alt="" className="baddy-13"></img>
          <img onMouseOver={event => this.explosion(event)} src={bobaFet} alt="" className="baddy-14"></img>
          <img onMouseOver={event => this.explosion(event)} src={deathStar} alt="" className="baddy-15"></img>
          <img onMouseOver={event => this.explosion(event)} src={stormTrooper} alt="" className="baddy-16"></img>
          <img onMouseOver={event => this.explosion(event)} src={tieFighter} alt="" className="baddy-17"></img>
          <img onMouseOver={event => this.explosion(event)} src={bobaFet} alt="" className="baddy-18"></img>
          <img onMouseOver={event => this.explosion(event)} src={deathStar} alt="" className="baddy-19"></img>
          <img onMouseOver={event => this.explosion(event)} src={stormTrooper} alt="" className="baddy-20"></img>
        </section>
      )
    } else {
      return (
        <div className="game-prompt">
          <h1>
            If no mistake have you made, yet losing you are… a different game
            you should play
          </h1>
          <NavLink to="/landing" className="nav">
            <img
              src={yoda}
              alt="characters icon"
              className="character-icon"
            />
            Intro
          </NavLink>
        </div>
      );
    }
  };
  }

export default Home;
