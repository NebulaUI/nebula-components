import React from 'react'
import T from 'prop-types'

import classNames from 'classnames'

const Modal = ({ isOpen, close, children }) => (
  <div className={classNames('c-modal', { 'is-open': isOpen })}>
    <button className="c-modal__overlay" onClick={close} />
    <div className="c-modal__body">
      <div className="c-modal__content">
        <button className="c-modal__dismiss" onClick={close} />
        {children}
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  children: T.node,
  isOpen: T.bool,
  close: T.func,
}

export default Modal
