import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit, defaultTerm }) => {
  const [ term, setTerm ] = useState(defaultTerm);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  }

  const onSubmit = event => {
    event.preventDefault();

    // {Call back is way to pass search term up to App.js}
    onFormSubmit(term)
  }

  return (
    <div className="search-bar ui segment ">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input 
          type="text"
           value={term}
           onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  )
};


export default SearchBar;