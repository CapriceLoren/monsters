import './card.styles.css';

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  
    return (
      <div className='card-container' key={id}>
              {/* // key property stops error, usually id value as it will be completely unique. monster.name could be duplicated, and react would rerender both
          // add key to highest level (ie, if this h1 was inside of a div) */}
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
    )
  }

export default Card;