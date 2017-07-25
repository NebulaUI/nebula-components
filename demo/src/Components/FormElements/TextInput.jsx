import React from 'react'

const TextInput = () => (
  <div>
    <h4>Text input: Medium</h4>
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
    </div>
    <hr />
    <h4>Text input: Small</h4>
    <div className="o-grid o-grid--gutter-md o-grid--matrix">
      <div className="o-grid__item u-1/2@sm">
        <label htmlFor="text-input-1" className="c-label">Forename:</label>
        <input type="text" id="text-input-1" placeholder="Nebula" className="c-text-input c-text-input--sm" />
      </div>
    </div>
    <hr />
  </div>
)

export default TextInput
