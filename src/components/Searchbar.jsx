import React, { useState } from "react";
import propTypes from "prop-types";

function Searchbar(props) {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(query);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
export default Searchbar;
