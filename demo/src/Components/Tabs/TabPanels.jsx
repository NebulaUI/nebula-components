import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const TabPanels = ({ activeIndex, children, className }) => {
  const filteredChildren = React.Children.map(children, (child, index) => (
    index === activeIndex ? child : null))
  return (
    <div className={classNames('c-tab__panels', className)}>
      {filteredChildren}
    </div>
  )
}

TabPanels.propTypes = {
  className: T.string,
  children: T.node,
  activeIndex: T.number,
}

export default TabPanels
