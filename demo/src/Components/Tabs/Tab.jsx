import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Tab = ({ children, index, activateTab, isActive, disabled, className }) => {
  const handleClick = () => activateTab(index);
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={classNames('c-tabs', className, { 'is-active': isActive })}
    >
      {children}
    </button>
  )
}

Tab.propTypes = {
  children: T.node,
  activateTab: T.func,
  index: T.number,
  isActive: T.bool,
  disabled: T.bool,
  className: T.string,
}

export default Tab
