import React from 'react'

const Search = () => (
  <div>
    <h4>Search: Medium</h4>
    <div className="o-grid o-grid--gutter-md o-grid--matrix">
      <div className="o-grid__item u-1/2">
        <label htmlFor="search" className="c-label">Label</label>
        <div className="c-search c-search--submit-left">
          <input type="text" id="search" placeholder="Search…" className="c-text-input c-search__input" />
          <button className="c-search__submit c-btn c-btn--alpha" title="submit" />
        </div>
      </div>
      <div className="o-grid__item u-1/2">
        <label htmlFor="search" className="c-label">Label</label>
        <div className="c-search c-search--submit-right">
          <input type="text" id="search" placeholder="Search…" className="c-text-input c-search__input" />
          <button className="c-search__submit c-btn c-btn--alpha" title="submit" />
        </div>
      </div>
    </div>
    <hr />
    <h4>Search: Small</h4>
    <div className="o-grid o-grid--gutter-md o-grid--matrix">
      <div className="o-grid__item">
        <label htmlFor="search" className="c-label">Label</label>
        <div className="c-search c-search--submit-left">
          <input type="text" id="search" placeholder="Search…" className="c-text-input c-text-input--sm c-search__input" />
          <button className="c-search__submit c-btn c-btn--alpha" title="submit" />
        </div>
      </div>
    </div>
    <hr />
  </div>
)

export default Search
