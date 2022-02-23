import React from 'react'

const SearchBar = () => (
    <>
        <label htmlFor="header-search">
            <span className="visually-hidden">Etsi tuotteista</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Tuotteen nimi"
            name="s" 
        />
        <button type="submit">Search</button>
    
    </>
);

export default SearchBar;