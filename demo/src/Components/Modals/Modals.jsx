import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Modals = ({ handleClick, className, isOpen }) => (
  <div className="o-grid__item u-1/2@sm">
    <div className={classNames('c-modals c-card', className, { 'is-open': isOpen })}>
      <div className={classNames('c-modals__header', className)}>
        <h3>Modal Heading</h3>
        <button className="c-btn" onClick={this.handleClick}>&times;</button>
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
  handleClick: T.func,
  className: T.string,
  isOpen: T.bool,
}

export default Modals
