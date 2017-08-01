import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const DropdownContent = ({ children, className }) => (
  <ul className={classNames('c-navbar__dropdown', className)}>
    {children}
  </ul>
)

DropdownContent.propTypes = {
  className: T.string,
  children: T.node.isRequired,
}

export default DropdownContent
