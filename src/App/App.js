import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = ({
      data: []
    })
  }
  componentDidMount() {
    fetch('https://swapi.co/api/')
    .then(response => response.json())
    .then(data => console.log(data)) 
    .catch(err => console.log(err))
  }
  render() {
    return <div>hi</div>
  }
  
}


export default App;
