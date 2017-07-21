import React from 'react'

const Radio = () => (
  <div>
    <h4>Radio</h4>
    <div className="c-form-input">
      <input type="radio" name="radio" className="c-form-input__input" id="radio-1" />
      <label htmlFor="radio-1" className="c-form-input__label c-form-input__label--radio">
        Select
      </label>
    </div>
    <div className="c-form-input">
      <input type="radio" name="radio" className="c-form-input__input" id="radio-2" />
      <label htmlFor="radio-2" className="c-form-input__label c-form-input__label--radio">
        Select
      </label>
    </div>
    <div className="c-form-input">
      <input type="radio" name="radio" disabled className="c-form-input__input" id="radio-3" />
      <label htmlFor="radio-3" className="c-form-input__label c-form-input__label--radio">
        Select Disabled
      </label>
    </div>
  </div>
)

export default Radio
