import React, { Component } from 'react'
import classNames from 'classnames'

import Dropdown from './Dropdown'

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
    return (
      <div className={classNames('c-navbar', { 'is-open': this.state.isOpen })}>
        <button className="c-navbar__overlay" aria-hidden="true" onClick={this.handleToggle} />
        <nav className="c-navbar__wrap">
          <button className="c-navbar__toggle" aria-hidden="true" tabIndex="-1" onClick={this.handleToggle}>
            <span />
          </button>
          <a href="" className="c-navbar__logo">
            Nebula Components
          </a>
          <ul className="c-navbar__nav">
            <li className="c-navbar__item">
              <a href="" className="c-navbar__link">Link</a>
            </li>
            <Dropdown />
            <li className="c-navbar__item">
              <a href="" className="c-navbar__link">Link</a>
            </li>
            <li className="c-navbar__item">
              <a href="" className="c-navbar__link is-active">Link</a>
            </li>
            <li className="c-navbar__item">
              <a href="" className="c-navbar__link">Link</a>
            </li>
            <li className="c-navbar__item">
              <a href="" className="c-navbar__link">Link</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
