import React from 'react'

const Search = () => (
  <div className="o-grid">
    <div className="o-grid__item u-1/2@sm">
      <label htmlFor="search" className="c-label">Search:</label>
      <div className="c-search c-search--submit-right">
        <input type="text" id="search" placeholder="Search…" className="c-text-input c-text-input--sm c-search__input" />
        <button className="c-search__submit c-btn c-btn--alpha" title="submit" />
      </div>
    </div>
  </div>
)

export default Search
