import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    } 
  }

  componentDidMount() {
    axios('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState({ players: res.data })
      })
      .catch(err => console.error('FIX ME', err))      
  }

  render() {
    return(
      <div>
        <h1>Women's World Cup Players</h1>

        {this.state.players.map( player => {
          return (
            <div key={player.id}>
              <h3>{player.name}</h3>
              <p>Country: {player.country}</p>
              <p>Searches: {player.searches}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
