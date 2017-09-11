import React from 'react'
import T from 'prop-types'

const DropdownToggle = ({ handleToggle }) => (
  <button className="c-btn-dropdown__toggle" onClick={handleToggle} />
)


DropdownToggle.propTypes = {
  handleToggle: T.func,
}

export default DropdownToggle
