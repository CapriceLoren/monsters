import { Component } from 'react';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    //react renders on mount, rerenders when props or state change [ie: start as an empty array, get populated by API call]

    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
          // key property stops error, usually id value as it will be completely unique. monster.name could be duplicated, and react would rerender both
          // add key to highest level (ie, if this h1 was inside of a div)
        ))}
      </div>
    )
  }
}

export default CardList;