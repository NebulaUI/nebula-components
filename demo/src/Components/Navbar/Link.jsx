import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Link = ({ to, className, children }) => (
  <a href={to} className={classNames('c-navbar__link', className)}>
    {children}
  </a>
)

Link.propTypes = {
  to: T.string.isRequired,
  className: T.string,
  children: T.node.isRequired,
}

export default Link
