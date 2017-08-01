import React, { Component } from 'react'
import T from 'prop-types'
import classNames from 'classnames'

import Overlay from './Overlay'
import Wrap from './Wrap'

class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { handleToggle, state: { isOpen }, props: { children, className } } = this
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === Overlay || child.type === Wrap) {
        return React.cloneElement(child, {
          handleToggle,
        })
      }
      return child
    })
    return (
      <div className={classNames('c-navbar', className, { 'is-open': isOpen })}>
        {enhancedChildren}
      </div>
    )
  }
}

Navbar.propTypes = {
  children: T.node.isRequired,
  className: T.string,
}

export default Navbar
