import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search">
      <label className="search-title" for="search">
        <h2>Search robot:</h2>
      </label>
      <input
        id="search"
        name="search"
        className="search-input"
        type="search"
        placeholder="Insert name"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
