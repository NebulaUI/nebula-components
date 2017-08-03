import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

import Overlay from './Overlay'

const Modals = ({ handleClose, isOpen, className }) => (
  <div className={classNames('c-modals', className, { 'is-open': isOpen })}>
    <Overlay />
    <div className="c-card">
      <div className={classNames('c-modals__header', className)}>
        <h3>Modal Heading</h3>
        <button className="c-btn" onClick={handleClose}>&times;</button>
      </div>
      <div className={classNames('c-modals__body', className)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Autem, dolor dolores impedit minus nisi non similique?
        Aliquam enim incidunt numquam quia quidem voluptatem? Eius,
        impedit maiores quae similique tempore temporibus!
      </div>
    </div>
  </div>
)

Modals.propTypes = {
  isOpen: T.bool,
  className: T.string,
  handleClose: T.func,
}

export default Modals
