import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  onSearchChange = (event) => {
    //if you have many onchange/async functions it will impact preformance because they are unnecessarily rendered. so it should be in the component, not the render which is a larger scope
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return {searchField}
  })
}

  render() {
    //destructuring, need .this because class/ something outside render is being referenced
    const { monsters, searchField } = this.state
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className="monsters-search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
    
  );
}
}
export default App;
