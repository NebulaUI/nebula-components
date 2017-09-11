import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const DropdownContent = ({ children, className }) => (
  <div className={classNames('c-btn-dropdown__content', className)}>
    { children }
  </div>
)

DropdownContent.propTypes = {

  className: T.string,
  children: T.node,
}

export default DropdownContent
