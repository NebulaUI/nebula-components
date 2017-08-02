import React, { Component } from 'react'
import T from 'prop-types'

import Overlay from './Overlay'
import Modals from './Modals'

class ModalContainer extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isClosed: false,
    }
  }

  // handleOpen = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   })
  // }
  //
  // handleClose = () => {
  //   this.setState({
  //     isClosed: !this.state.isClosed,
  //   })
  // }

  handleClick = () => {
    alert();
    this.setState({
      isOpen: !this.state.isOpen,
      isClosed: !this.state.isClosed,
    })
  }

  render() {
    const { handleClick, state: { isOpen }} = this
    return (
      <div>
        <Overlay />
        <div className="o-site-wrap o-site-wrap--padding">
          <h4>Modals</h4>
          <div className="o-grid o-grid--gutter-md o-grid--matrix">
            <div className="o-grid__item">
              <button className="c-btn c-btn--alpha c-btn--md" handleClick={this.handleClick}>Click me</button>
              <Modals />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ModalContainer.propTypes = {
  handleClick: T.func,
}

export default ModalContainer
