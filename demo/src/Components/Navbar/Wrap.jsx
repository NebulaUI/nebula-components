import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

import Toggle from './Toggle'

const Wrap = ({ handleToggle, children, className }) => {
  const enhancedChildren = React.Children.map(children, (child) => {
    if (child.type === Toggle) {
      return React.cloneElement(child, {
        handleToggle,
      })
    }
    return child
  })
  return (
    <nav className={classNames('c-navbar__wrap', className)}>
      {enhancedChildren}
    </nav>
  )
}

Wrap.propTypes = {
  handleToggle: T.func,
  children: T.node.isRequired,
  className: T.string,
}

export default Wrap
