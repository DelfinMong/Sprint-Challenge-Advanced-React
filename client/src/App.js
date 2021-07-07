import React from 'react';
import axios from  'axios'
// import PlayerList from './components/PlayersList'
import DarkMode from './components/DarkMode'
import './App.css';
import Playercard from './components/PlayerCard';

class App extends React.Component {
  
  state = {
    playersData: [],
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(data => data.json()) 
      .then(res => {
        console.log("Players API: ", res);
        this.setState({
          playersData: res
        });
      })
      .catch(err => console.log("have an error", err));
  }

  render() {
    return (
      <div className="App">
         <h1>World Cup</h1>
         <DarkMode />
         <div>
           {this.state.playersData.map( player => {
             return (<Playercard  
                 name={player.name} country={player.country} searches={player.searches}key={player.id}
            />
           )})}
         </div>
         {/* <PlayerList players={this.state.playersData} /> */}
      </div>
    );
  }

}

export default App;

