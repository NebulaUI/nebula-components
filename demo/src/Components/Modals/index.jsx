import React, { Component } from 'react'

import Modals from './Modals'

class ModalContainer extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isClosed: false,
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  handleClose = () => {
    this.setState({
      isOpen: this.state.isOpen,
    })
  }

  // handleClickOutside = (e) => {
  //   if (!this.wrapperRef.contains(e.target)) {
  //     this.setState({
  //       isOpen: false,
  //     })
  //   }
  // }

  render() {
    const { handleOpen, handleClose, state: { isOpen } } = this
    return (
      <div>
        <div className="o-site-wrap o-site-wrap--padding">
          <h4>Modals</h4>
          <div className="o-grid o-grid--gutter-md o-grid--matrix">
            <div className="o-grid__item">
              <button className="c-btn c-btn--alpha c-btn--md" onClick={handleOpen}>Click me</button>
              <div className="o-grid__item">
                <Modals isOpen={isOpen} handleClose={handleClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalContainer
