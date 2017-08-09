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
          Aspernatur culpa ex explicabo.
        </div>
      </div>
    </div>
  </div>
)

Flyout.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Flyout
