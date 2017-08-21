import React, { Component } from 'react'
import T from 'prop-types'
import classNames from 'classnames'

class DropdownToggle extends Component {
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

  handleToggle = () => {
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
      <button
        onClick={handleToggle}
        className={classNames('c-btn c-btn--alpha c-btn--md c-btn-group__dropdown-toggle', className, { 'is-open': isOpen })}
        aria-hidden="true"
        tabIndex="-1"
        ref={(node) => { this.wrapperRef = node }}
      >
        { enhancedChildren }
      </button>
    )
  }
}

DropdownToggle.propTypes = {
  className: T.string,
  children: T.node.isRequired,
}

export default DropdownToggle
