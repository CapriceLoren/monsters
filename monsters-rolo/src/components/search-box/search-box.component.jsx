import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    // gives you the x to clear text
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;