import React, { Component } from 'react'
import classNames from 'classnames'

class Dropdown extends Component {
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
      <li className={classNames('c-navbar__item', { 'is-open': this.state.isOpen })}>
        <button className="c-navbar__dropdown-toggle" onClick={this.handleToggle}>
          Galaxies
        </button>
        <ul className="c-navbar__dropdown">
          <li className="c-navbar__item">
            <a href="" className="c-navbar__link">Milky Way</a>
          </li>
          <li className="c-navbar__item">
            <a href="" className="c-navbar__link">Andromeda</a>
          </li>
        </ul>
      </li>
    )
  }
}

export default Dropdown
