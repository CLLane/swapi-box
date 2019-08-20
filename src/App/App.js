import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = ({
      data: [],
      people: []
    })
  }
  componentDidMount() {
    fetch('https://swapi.co/api/')
    .then(response => response.json())
    .then(data => console.log(data)) 
    .catch(err => console.log(err))
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
