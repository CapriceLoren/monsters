import { Component } from 'react';
import './App.css';

// using class component instead of functional
class App extends Component {
  constructor() {
    //need super if you're calling constructor
    super();

    this.state = {
      //always json object
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    //first time component gets placed onto DOM, only happens once unless it has been unmounted
    //this is when you want to make an API request
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }
      ))
  }

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

  return (
    <div className="App">
      <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={(event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
          return {searchField}
        })
      }}/>
      {
        filteredMonsters.map((monster) => {
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
