import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="flex items-center justify-center pa2 mb4 lightest-blue">
      <h2>Search Robots: </h2>
      <input
        className="ml3 pa3 ba b--green bg-lightest-blue outline-0"
        type="search"
        placeholder="Insert robot name"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
