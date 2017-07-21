import React from 'react'

const Checkbox = () => (
  <div>
    <h4>Checkbox</h4>
    <div className="c-form-input">
      <input type="checkbox" className="c-form-input__input" id="check-1" />
      <label htmlFor="check-1" className="c-form-input__label c-form-input__label--checkbox">
        Select
      </label>
    </div>
    <div className="c-form-input">
      <input type="checkbox" disabled checked className="c-form-input__input" id="check-2" />
      <label htmlFor="check-2" className="c-form-input__label c-form-input__label--checkbox">
        Select Disabled (checked)
      </label>
    </div>
    <div className="c-form-input">
      <input type="checkbox" disabled className="c-form-input__input" id="check-3" />
      <label htmlFor="check-3" className="c-form-input__label c-form-input__label--checkbox">
        Select Disabled
      </label>
    </div>
  </div>
)

export default Checkbox
