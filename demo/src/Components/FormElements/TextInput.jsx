import React from 'react'

const TextInput = () => (
  <div>
    <h4>Text input</h4>
    <div className="o-grid o-grid--gutter-md o-grid--matrix">
      <div className="o-grid__item u-1/2@sm">
        <label htmlFor="text-input-1" className="c-label">Forename:</label>
        <input type="text" id="text-input-1" placeholder="Nebula" className="c-text-input" />
      </div>
      <div className="o-grid__item u-1/2@sm">
        <label htmlFor="text-input-2" className="c-label">Surname:</label>
        <input type="text" id="text-input-2" placeholder="Nebula" disabled className="c-text-input" />
      </div>
      <div className="o-grid__item">
        <label htmlFor="text-input-3" className="c-label">Message:</label>
        <textarea id="text-input-3" className="c-text-input c-text-input--textarea" placeholder="Your message…" />
      </div>
      <div className="o-grid__item u-1/2@sm">
        <label htmlFor="text-input-4" className="c-label">Search:</label>
        <div className="c-text-search">
          <input type="search" id="text-input-4" name="search" placeholder="Search..." className="c-text-input c-text-input--search" />
          <button type="submit" className="c-btn c-btn--alpha c-btn--md c-btn-icon c-btn-icon--search" />
        </div>
      </div>
    </div>
  </div>
)

export default TextInput
