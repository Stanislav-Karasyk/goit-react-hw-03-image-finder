import React from 'react';
import slyles from './Searchbar.module.css';

const Searchbar = ({ onSubmit, onHandleChange, query }) => {
  return (
    <header className={slyles.Searchbar}>
      <form className={slyles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={slyles.SearchFormButton}>
          <span className={slyles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={slyles.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          name="input"
          onChange={onHandleChange}
          value={query}
        />
      </form>
    </header>
  );
};

export default Searchbar;
