import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <label className="search">
      <h2 className="search-title">Search robots:</h2>

      <input
        className="search-input"
        type="search"
        placeholder="Insert name"
        onChange={searchChange}
      ></input>
    </label>
  );
};

export default SearchBox;
