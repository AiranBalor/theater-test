import React from 'react';
import './Search.css';

function Search({ handleSearchResult, handleSearchValue, hasSearch, searchValue, hasResult }) {

  return (
    <div className="search">
      <h1 className="search__title" >{(hasSearch && hasResult) ? `По запросу «${searchValue}» мы нашли` : (hasSearch && !hasResult) ? `По запросу «${searchValue}» мы ничего не нашли`: "Поиск"}</h1>
      <form className="search__form" action="#">
        <input minLength="3" className="search__input" type="text" onChange={handleSearchValue}/>
        <button className="search__button" type="submit" onClick={handleSearchResult}>ИСКАТЬ</button>
      </form>
    </div>
  );
}

export default Search;
