import React from 'react'
import T from 'prop-types'

const DropdownToggle = ({ handleToggle, className }) => (
  <button className="c-btn-dropdown__toggle" onClick={handleToggle} />
)


DropdownToggle.propTypes = {
  handleToggle: T.func,
  className: T.string
}

export default DropdownToggle
