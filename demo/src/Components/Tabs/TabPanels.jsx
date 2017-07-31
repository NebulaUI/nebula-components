import React from 'react'
import T from 'prop-types'

const TabPanels = ({ activeIndex, children }) => {
  const filteredChildren = React.Children.map(children, (child, index) => {
    if (index === activeIndex) {
      return child
    }
    return null
  })
  return (
    <div>
      {filteredChildren}
    </div>
  )
}

TabPanels.propTypes = {
  children: T.node,
  activeIndex: T.number,
}

export default TabPanels
