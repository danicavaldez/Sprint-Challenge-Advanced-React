import React from 'react';
import './App.css';
import axios from 'axios'
import Navbar from "./components/NavBar.js";

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
      <div className="App">
        <Navbar />
        {this.state.players.map( player => {
          return (
            <div className="players" key={player.id}>
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
