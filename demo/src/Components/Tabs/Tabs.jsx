import React, { Component } from 'react'
import T from 'prop-types'
import classNames from 'classnames'

import TabList from './TabList'
import TabPanels from './TabPanels'

class Tabs extends Component {
  constructor() {
    super()

    this.state = {
      activeIndex: 0,
    }
  }

  activateTab = (activeIndex) => {
    this.setState({
      activeIndex,
    })
  }

  render() {
    const { activeIndex } = this.state
    const children = React.Children.map(this.props.children, (child) => {
      if (child.type === TabList) {
        return React.cloneElement(child, {
          activeIndex,
          activateTab: this.activateTab,
        })
      } else if (child.type === TabPanels) {
        return React.cloneElement(child, {
          activeIndex,
        })
      }

      return child
    })
    return <div className={classNames('c-tabs', this.props.className)}>{children}</div>
  }
}

Tabs.propTypes = {
  children: T.node,
  className: T.string,
}

export default Tabs
