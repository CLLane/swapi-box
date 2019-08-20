import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = ({
      data: [],
      people: [],
      planets: [],
      vehicles: [],
      films: []
    })
  }
  componentDidMount() {
    fetch('https://swapi.co/api/')
    .then(response => response.json())
    .then(data => this.fetchAll(data))
    .then(data => this.fetchPersonInfo(this.state.people))
    .then(data => this.setState({data: data}))
    .catch(err => console.log(err))
  }
  
  fetchAll = (data) => {
    const people = 
    fetch(data.people)
      .then(response => response.json())
      .then(characters => this.setState({people: characters}))
    
    const planets = fetch(data.planets)
      .then(response => response.json())
      .then(planet => this.setState({ planets: planet }));

    const vehicles = fetch(data.vehicles)
      .then(response => response.json())
      .then(vehicle => this.setState({ vehicles: vehicle }));

    const films = fetch(data.films)
      .then(response => response.json())
      .then(film => this.setState({ films: film }));
    
      return Promise.all([people, planets, vehicles, films])
    }
    
    fetchPersonInfo = (people) => {
      const homeWorlds = people.results.map(person => {
        return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({homeworld: data.name, name: person.name}))
      })

        const species = people.results.map((person, i) => {
          return fetch(person.species)
            .then(response => response.json())
            .then(type => ({
              name: person.name,
              homeworld: homeWorlds[i],
              species: type.name
            }));
        });
      setTimeout(() => {console.log(species)}, 6000)
      // return Promise.all(homeWorlds)
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
