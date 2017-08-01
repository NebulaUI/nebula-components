import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Overlay = ({ handleToggle, children, className }) => (
  <button
    className={classNames('c-navbar__overlay', className)}
    aria-hidden="true"
    tabIndex="-1"
    onClick={handleToggle}
  >
    {children}
  </button>
)

Overlay.propTypes = {
  handleToggle: T.func,
  children: T.node,
  className: T.string,
}

export default Overlay
