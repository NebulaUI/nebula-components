import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Toggle = ({ handleToggle, children, className }) => (
  <button
    className={classNames('c-navbar__toggle', className)}
    aria-hidden="true"
    tabIndex="-1"
    onClick={handleToggle}
  >
    {children}
  </button>
)

Toggle.propTypes = {
  handleToggle: T.func,
  children: T.node,
  className: T.string,
}

export default Toggle
