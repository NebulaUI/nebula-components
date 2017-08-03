import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Overlay = ({ handleClose, className }) => (
  <button
    className={classNames('c-modals__overlay', className)}
    aria-hidden="true"
    tabIndex="-1"
    onClick={handleClose}
    // ref={(node) => { this.wrapperRef = node }}
  />
)

Overlay.propTypes = {
  handleClose: T.func,
  className: T.string,
}

export default Overlay
