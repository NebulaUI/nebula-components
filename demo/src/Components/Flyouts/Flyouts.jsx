import React from 'react'
import PropTypes from 'prop-types'

import Flyout from './Flyout'

const Flyouts = ({ handleClick, openFlyouts }) => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Flyouts</h4>
      <div className="o-grid o-grid--gutter-md o-grid--matrix">
        {Object.keys(openFlyouts).map(key => (
          <Flyout
            isOpen={openFlyouts[key]}
            id={key}
            key={key}
            handleClick={handleClick}
          />),
        )}
      </div>
    </div>
  </section>
)

Flyouts.propTypes = {
  handleClick: PropTypes.func.isRequired,
  openFlyouts: PropTypes.shape({
    NE: PropTypes.bool.isRequired,
    SE: PropTypes.bool.isRequired,
    SW: PropTypes.bool.isRequired,
    NW: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Flyouts
