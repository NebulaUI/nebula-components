import React, { Component } from 'react'

import Tabs from './Tabs'

class TabsContainer extends Component {
  constructor() {
    super()
    this.state = {
      tabs: {
        isActive: false,
        tabOne: {
          id: 'tabOne',
          isActive: false,
        },
        tabTwo: {
          id: 'tabTwo',
          isActive: false,
        },
        tabThree: {
          id: 'tabThree',
          isActive: false,
        },
        tabThree: {
          id: 'tabTwo',
          isActive: false,
        },
      },
    }
  }

  handleClick = (id) => {
    this.setState({
      tabs: {
        isActive: !this.state.tabs.isActive,
        tabOne: {
          id: tabOne,
          isActive: !this.state.tabs.isActive,
        },
      },
    })
  }

  render() {
    const { tabs } = this.state;
    return <Tabs handleClick={this.handleClick} tabs={tabs} />
  }
}

export default TabsContainer

