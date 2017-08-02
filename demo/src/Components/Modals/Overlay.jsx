import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Overlay = ({ handleClick, className }) => (
  <button
    className={classNames('c-modals__overlay', className)}
    aria-hidden="true"
    tabIndex="-1"
    handleClick={this.handleClick}
  >
  </button>
)

Overlay.propTypes = {
  handleClick: T.func,
  className: T.string,
}

export default Overlay
