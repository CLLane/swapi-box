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
    fetch()
    .then(response => response.json())
    .then(data => this.setState({data: data})) 
    .catch(err => console.log(err))
  }

  render()
}

export default App;
