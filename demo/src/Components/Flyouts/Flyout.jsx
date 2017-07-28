import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Flyout = ({ isOpen, id, handleClick }) => (
  <div className="o-grid__item u-1/4@sm">
    <div className={classNames('c-flyout', { 'is-open': isOpen })}>
      <button className="c-flyout__toggle" onClick={() => { handleClick(id) }}>toggle me: {id}</button>
      <div className={`c-flyout__content c-flyout__content--${id.toLowerCase()}`}>
        <div className="c-card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aspernatur culpa ex explicabo illo inventore laboriosam neque,
          nihil omnis ratione ullam. Error ex, excepturi incidunt ipsum iure libero
          maiores quidem voluptates.
        </div>
      </div>
    </div>
  </div>
)

Flyout.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isOpen: PropTypes.string.isRequired,
}

export default Flyout
