import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Nav = ({ children, className }) => (
  <ul className={classNames('c-navbar__nav', className)}>
    {children}
  </ul>
)

Nav.propTypes = {
  children: T.node.isRequired,
  className: T.string,
}

export default Nav
