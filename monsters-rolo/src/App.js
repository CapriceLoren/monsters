import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// using class component instead of functional
class App extends Component {
  constructor() {
    //need super if you're calling constructor
    super();

    this.state = {
      //always json object
      monsters: [
      {
        name: 'Linda',
        id: 1
      },
      {
        name: 'Frank',
        id: 2
      },
      {
        name: 'Jacky',
        id: 3
        },
      {
        name: 'Caprice',
        id: 4
      }]
    }
  }

  render() {
  return (
    <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
          // key property stops error, usually id value as it will be completely unique. monster.name could be duplicated, and react would rerender both
          // add key to highest level (ie, if this h1 was inside of a div)
        })
      }
    </div>
  );
}
}
export default App;
