import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const ToggleBars = ({ children, className }) => (
  <span className={classNames('c-navbar__toggle-bars', className)}>
    {children}
  </span>
)

ToggleBars.propTypes = {
  children: T.node,
  className: T.string,
}

export default ToggleBars
