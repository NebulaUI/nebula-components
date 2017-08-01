import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const DropdownToggle = ({ handleToggle, children, className }) => (
  <button
    className={classNames('c-navbar__dropdown-toggle', className)}
    onClick={handleToggle}
  >
    {children}
  </button>
)

DropdownToggle.propTypes = {
  handleToggle: T.func,
  className: T.string,
  children: T.node.isRequired,
}

export default DropdownToggle
