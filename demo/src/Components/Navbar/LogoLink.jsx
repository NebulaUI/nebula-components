import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const LogoLink = ({ children, className, to }) => (
  <a href={to} className={classNames('c-navbar__logo', className)}>
    { children }
  </a>
)

LogoLink.propTypes = {
  to: T.string.isRequired,
  children: T.node.isRequired,
  className: T.string,
}

export default LogoLink
