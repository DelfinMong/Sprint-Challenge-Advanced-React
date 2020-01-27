import React from 'react';
import axios from  'axios'
import Usercard from "./components/Usecard";
import FollowersCard from "./components/FollowersCard";
import DarkMode from './components/DarkMode'
import './App.css';

class App extends React.Component {
  
  state = {
    followersList: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/DelfinMong/followers")
      .then(res => {
        console.log("Followers API: ", res);
        this.setState({
          followersList: res.data,
        });
      })
      .catch(err => console.log("have an error", err));
  }

  render() {
    return (
      <div className="App">
        <Usercard login={this.state.login} img={this.state.img} />
         <DarkMode />
        {this.state.followersList.map(item => {
          return <FollowersCard login={item.login} img={item.avatar_url} />;
        })}
      </div>
    );
  }

}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


