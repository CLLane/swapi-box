import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = ({
 
      people: [],
      planets: [],
      vehicles: [],
      films: ''
    })
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => this.getPersonInfo(data.results))
    .then(data => this.getPersonPlanet(data))
    .then(data => this.getPersonSpecies(data))
    .then(data => this.setState({people: data}))

    fetch('https://swapi.co/api/vehicles')
    .then(response => response.json())
    .then(data => this.getVehicleInfo(data.results))
    .then(data => this.setState({vehicles: data}))

    fetch("https://swapi.co/api/films")
      .then(response => response.json())
      .then(data => data.results)
      .then(data => this.setState({films: data[Math.floor(Math.random() * Math.floor(7))].opening_crawl}));

    fetch("https://swapi.co/api/planets")
    .then(response => response.json())
    // .then(data => this.getPlanetInfo(data.results))
    .then(data => this.getResidents(data.results))
    .then(data => this.setState({planets: data}))
    setTimeout(() => {
      console.log(this.state)
    }, 9000);

  }

//getResidents map over planets, declare empty array,  map over residents -> fetch each resident .thens, return the planet object, return array of the planet objects

getResidents = (data) => {
  let planets = data.map(planet => {
    let array = [];
    planet.residents.forEach(resident => {
      return fetch(resident).then(res => res.json()).then(data => array.push(data.name))
    })
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: array
    };
  })
  return planets
}

getPlanetInfo = (data) => {
  let planets = data.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    }
  })
  return planets
}
  
getVehicleInfo = (data) => {
  let vehicles = data.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      numberOfPassengers: vehicle.passengers
    };
  })
  return vehicles
}

 getPersonInfo = (data) => {
    let people = data.map(person => {
      return {
        name: person.name,
        homeworld: person.homeworld,
        species: person.species[0],
        language: '',
        population: ''
      }
    })
    return people
    }
 
  getPersonPlanet = (data) => {
    let promises = data.map(person => {
     return fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({...person, homeworld: data.name, population: data.population}))
    })
   return Promise.all(promises)
  }

  getPersonSpecies = (data) => {
     let promises = data.map(person => {
       return fetch(person.species)
       .then(response => response.json())
       .then(data => ({...person, species: data.name, language: data.language}))
     })
     return Promise.all(promises)
  }
    
  //Data needed for film
  //opening_crawl(data.films.results.opening_crawl)

  //Data needed for people
  //name(data.people.results.name)
  //homeworld(data.people.results.homeworld.name(url-another fetch))
  //species(data.people.results.species.name(url-another fetch))
  //population of homeworld(data.people.results.homeword.population(url-another fetch))

  //Data needed for Planets
  //name(data.planets.results.name)
  //terrain(data.planets.results.terrain)
  //population(data.planets.results.population)
  //climate(data.planets.results.climate)
  //residents(data.planets.results.residents(array of urls that lead to people, return people.name whose numbers match the url num))

  //Data needed for Vehicles
  //name(data.vehicles.results.name)
  //model(data.vehicles.results.model)
  //vehicle_class(data.vehicles.results.vehicle_class)
  //num passengers(data.vehicles.results.passengers)

  render() {
    return <div>hi</div>
  }
  
}

export default App;
