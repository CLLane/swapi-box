import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';
import Container from "../Container/Container.js";
import Home from '../Home/Home.js'
import Landing from '../Landing/Landing.js'
import CardDisplay from "../CardDisplay/CardDisplay.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      people: [],
      vehicles: [],
      films: ""
    };
    console.log('yeehaw', this.state.planets)
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

  render() {
    let people = this.state.people
    let planets = this.state.planets
    let vehicles = this.state.vehicles
    let film = this.state.films

        return (
          <div>
            <header>
              <NavLink to="/landing" className="nav">
                Intro
              </NavLink>
              <NavLink to="/people" className="nav">
                People
              </NavLink>
              <NavLink to="/planets" className="nav">
                Planets
              </NavLink>
              <NavLink to="/vehicles" className="nav">
                Vehicles
              </NavLink>
              <NavLink to="/" className="nav">
                Home
              </NavLink>
            </header>
            <Route
              exact
              path="/landing"
              render={() => <Landing film={film} />}
            />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/people"
              render={() => <Container data={people} type="people" />}
            />
            <Route
              exact
              path="/planets"
              render={() => <Container data={planets} type="planets" />}
            />
            <Route
              exact
              path="/vehicles"
              render={() => (
                <Container data={vehicles} type="vehicles" />
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
                      <Container data={people} type="people" />
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
                      <Container data={planets} type="planets" />
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
                      <Container data={vehicles} type="vehicles" />
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
