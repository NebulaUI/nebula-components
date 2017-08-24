import React, { Component } from 'react'
import T from 'prop-types'
import classNames from 'classnames'

import DropdownToggle from './DropdownToggle'

class Dropdown extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleToggle = (e) => {
    e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  handleClickOutside = (e) => {
    if (!this.wrapperRef.contains(e.target)) {
      this.setState({
        isOpen: false,
      })
    }
  }

  render() {
    const { handleToggle, state: { isOpen }, props: { children, className } } = this
    const enhancedChildren = React.Children.map(children, (child) => {
      if (child.type === DropdownToggle) {
        return React.cloneElement(child, {
          handleToggle,
        })
      }
      return child
    })
    return (
      <div
        className={classNames('c-btn-group', className, { 'is-open': isOpen })}
        ref={(node) => { this.wrapperRef = node }}
      >
        {enhancedChildren}
      </div>
    )
  }
}

Dropdown.propTypes = {
  className: T.string,
  children: T.node.isRequired,
}

export default Dropdown
