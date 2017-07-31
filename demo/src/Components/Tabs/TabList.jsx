import React from 'react'
import T from 'prop-types'

const TabList = ({ children, activateTab, activeIndex }) => {
  const enhancedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      index,
      activateTab,
      isActive: index === activeIndex,
    })
  })
  return (
    <div>{enhancedChildren}</div>
  )
}

TabList.propTypes = {
  children: T.node,
  activateTab: T.func,
  activeIndex: T.number,
}

export default TabList
