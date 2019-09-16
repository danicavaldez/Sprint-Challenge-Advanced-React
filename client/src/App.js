import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    } 
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
  }

  render() {
    return(
      <div>
        <h1>Women's World Cup Players</h1>
      </div>
    )
  }
}

export default App;
