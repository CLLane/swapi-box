import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Container from "../Container/Container.js";
import Home from "../Home/Home.js";
import Landing from "../Landing/Landing.js";
import CardDisplay from "../CardDisplay/CardDisplay.js";
import Vader from "../Images/DarthVader.svg";
import deathStar from "../Images/DeathStar.svg";
import Planet from "../Images/Planet.svg";
import HomeIcon from "../Images/HomeIcon.svg";
import StarWarsIcon from "../Images/StarWarsIcon.svg";
import favoriteIcon from "../Images/favoriteIcon.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      people: [],
      vehicles: [],
      films: "",
      favorites: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(data => this.getPersonInfo(data.results))
      .then(data => this.getPersonPlanet(data))
      .then(data => this.getPersonSpecies(data))
      .then(data => this.setState({ people: data }))
      .catch(error => error.message);

    fetch("https://swapi.co/api/vehicles")
      .then(response => response.json())
      .then(data => this.getVehicleInfo(data.results))
      .then(data => this.setState({ vehicles: data }))
      .catch(error => error.message);

    fetch("https://swapi.co/api/films")
      .then(response => response.json())
      .then(data => data.results)
      .then(data =>
        this.setState({
          films: data[Math.floor(Math.random() * Math.floor(7))].opening_crawl
        })
      )
      .catch(error => error.message);

    fetch("https://swapi.co/api/planets")
      .then(response => response.json())
      .then(data => this.getResidents(data.results))
      .then(data => this.setState({ planets: data }))
      .catch(error => error.message);

       if (localStorage.getItem('favoriteArray')) {
      const favorites = JSON.parse(localStorage.getItem('favoriteArray'));
      this.setState({ favorites });
  }
}

  getResidents = data => {
    let planets = data.map((planet, i) => {
      let array = [];
      planet.residents.forEach(resident => {
        return fetch(resident)
          .then(res => res.json())
          .then(data => array.push(data.name));
      });
      return {
        id: i,
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: array
      };
    });
    return planets;
  };

  getVehicleInfo = data => {
    let vehicles = data.map((vehicle, i) => {
      return {
        id: i,
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicle_class,
        numberOfPassengers: vehicle.passengers
      };
    });
    return vehicles;
  };

  getPersonInfo = data => {
    let people = data.map((person, i) => {
      return {
        id: i,
        name: person.name,
        homeworld: person.homeworld,
        species: person.species[0],
        language: "",
        population: ""
      };
    });
    return people;
  };

  getPersonPlanet = data => {
    let promises = data.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({
          ...person,
          homeworld: data.name,
          population: data.population
        }));
    });
    return Promise.all(promises);
  };

  getPersonSpecies = data => {
    let promises = data.map(person => {
      return fetch(person.species)
        .then(response => response.json())
        .then(data => ({
          ...person,
          species: data.name,
          language: data.language
        }));
    });
    return Promise.all(promises);
  };

  toggleFav = (id, type) => {
    const foundCard = this.state[`${type}`].find(card => {
      return card.id === id - 1;
    });
    foundCard.isFavorite = !foundCard.isFavorite;
    this.saveToLocalStorage([...this.state.favorites, foundCard]);
    this.setState(
      {
        favorites: [...this.state.favorites, foundCard]
      },
      () => {
        console.log("this.state :", this.state);
      }
    );
  };

  saveToLocalStorage = favorites => {
    localStorage.setItem("favoriteArray", JSON.stringify(favorites));
  };

  render() {
    let { people, planets, vehicles, films, favorites } = this.state;
    return (
      <div>
        <header>
          <NavLink to="/landing" className="nav">
            <img
              src={StarWarsIcon}
              alt="characters icon"
              className="character-icon"
            />
            Intro
          </NavLink>
          <NavLink to="/people" className="nav">
            <img src={Vader} alt="characters icon" className="character-icon" />
            Characters
          </NavLink>
          <NavLink to="/planets" className="nav">
            <img
              src={Planet}
              alt="characters icon"
              className="character-icon"
            />
            Planets
          </NavLink>
          <NavLink to="/vehicles" className="nav">
            <img
              src={deathStar}
              alt="characters icon"
              className="character-icon"
            />
            Vehicles
          </NavLink>
          <NavLink to="/" className="nav">
            <img
              src={HomeIcon}
              alt="characters icon"
              className="character-icon"
            />
            Home
          </NavLink>
          <NavLink to="/favorites" className="nav">
            <img
              src={favoriteIcon}
              alt="favorites icon"
              className="character-icon"
            />
            Favorites
          </NavLink>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/landing" render={() => <Landing film={films} />} />
        <Route
          exact
          path="/people"
          render={() => (
            <Container data={people} type="people" toggleFav={this.toggleFav} />
          )}
        />
        <Route
          exact
          path="/planets"
          render={() => (
            <Container
              data={planets}
              type="planets"
              toggleFav={this.toggleFav}
            />
          )}
        />
        <Route
          exact
          path="/vehicles"
          render={() => (
            <Container
              data={vehicles}
              type="vehicles"
              toggleFav={this.toggleFav}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <Container
              data={favorites}
              type="favorites"
              toggleFav={this.toggleFav}
            />
          )}
        />
        <Route
          path="/people/:id"
          render={({ match }) => {
            const { id } = match.params;
            const foundPerson = people.find(
              person => person.id === parseInt(id)
            );
            if (foundPerson) {
              return (
                <div>
                  <CardDisplay {...foundPerson} />
                  <Container
                    data={people}
                    type="people"
                    toggleFav={this.toggleFav}
                  />
                </div>
              );
            } else {
              return "It does not exist what you are looking for";
            }
          }}
        />
        <Route
          path="/planets/:id"
          render={({ match }) => {
            const { id } = match.params;
            const foundPlanet = planets.find(
              planet => planet.id === parseInt(id)
            );
            if (foundPlanet) {
              return (
                <div>
                  <CardDisplay {...foundPlanet} />
                  <Container
                    data={planets}
                    type="planets"
                    toggleFav={this.toggleFav}
                  />
                </div>
              );
            } else {
              return "It does not exist what you are looking for";
            }
          }}
        />
        <Route
          path="/vehicles/:id"
          render={({ match }) => {
            const { id } = match.params;
            const foundVehicle = vehicles.find(
              planet => planet.id === parseInt(id)
            );
            if (foundVehicle) {
              return (
                <div>
                  <CardDisplay {...foundVehicle} />
                  <Container
                    data={vehicles}
                    type="vehicles"
                    toggleFav={this.toggleFav}
                  />
                </div>
              );
            } else {
              return "It does not exist what you are looking for";
            }
          }}
        />
      </div>
    );
  }
}

export default App;
