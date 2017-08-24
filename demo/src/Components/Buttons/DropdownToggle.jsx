import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const DropdownToggle = ({ handleToggle, children, className, to }) => (
  <a href={to} className={classNames('c-btn c-btn--alpha c-btn--md c-btn--full', className)}>
    { children }
    <button className="c-btn-group__dropdown-toggle" onClick={handleToggle} />
  </a>
)


DropdownToggle.propTypes = {
  to: T.string,
  handleToggle: T.func,
  className: T.string,
  children: T.node.isRequired,
}

export default DropdownToggle
