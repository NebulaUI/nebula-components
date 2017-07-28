import React, { Component } from 'react'

import Flyouts from './Flyouts'

class FlyoutsContainer extends Component {
  constructor() {
    super()
    this.state = {
      openFlyouts: {
        NE: false,
        SE: false,
        SW: false,
        NW: false,
      },
    }
  }

  handleClick = (direction) => {
    const newState = Object.keys(this.state.openFlyouts).reduce((acc, curr) => {
      acc[curr] = false
      return acc
    }, {})
    this.setState({
      openFlyouts: {
        ...newState,
        [direction]: !this.state.openFlyouts[direction],
      },
    })
  }

  render() {
    const { openFlyouts } = this.state
    return <Flyouts handleClick={this.handleClick} openFlyouts={openFlyouts} />
  }
}

export default FlyoutsContainer

