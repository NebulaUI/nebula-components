import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const TabList = ({ children, activateTab, activeIndex, className }) => {
  const enhancedChildren = React.Children.map(children, (child, index) => {
    React.cloneElement(child, {
      index,
      activateTab,
      isActive: index === activeIndex,
    })
  })
  return (
    <div className={classNames('c-tab__list', className)}>
      {enhancedChildren}
    </div>
  )
}

TabList.propTypes = {
  className: T.string,
  children: T.node,
  activateTab: T.func,
  activeIndex: T.number,
}

export default TabList
