import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const DropdownContent = ({ children, className }) => (
  <ul className={classNames('o-bare-list c-btn-group__dropdown-menu', className)}>
    { children }
  </ul>
)

DropdownContent.propTypes = {

  className: T.string,
  children: T.node,
}

export default DropdownContent
