import { Component } from "react";
import './card-list.styles.css';
import Card from '../card/card.component'

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    //react renders on mount, rerenders when props or state change [ie: start as an empty array, get populated by API call]

    return (
      <div className="card-list">

        {monsters.map((monster) => {

          return (
            <Card monster={ monster } />
          );
        })}
      </div>
    );
  }
}

export default CardList;
