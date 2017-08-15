import React from 'react'

const Select = () => (
  <div>
    <h4>Select: Medium</h4>
    <select className="c-select">
      <option defaultValue>Select option</option>
      <option value="">Value 1</option>
    </select>
    <h4>Select: Small</h4>
    <div className="o-grid__item u-1/2@sm">
      <select className="c-select c-select--sm">
        <option defaultValue>Select option</option>
        <option value="">Value 1</option>
      </select>
    </div>
  </div>
)

export default Select
