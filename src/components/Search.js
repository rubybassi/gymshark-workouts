import React from "react";
import "./search.css";

const Search = ({search, setSearch}) => {

  const handleUserSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="feature-container">
      <form>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={search}
          onChange={handleUserSearchInput}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
