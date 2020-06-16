import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search">
      <label className="search-title">
        <h2>Search robots:</h2>

        <input
          className="search-input"
          type="search"
          placeholder="Insert name"
          onChange={searchChange}
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;
