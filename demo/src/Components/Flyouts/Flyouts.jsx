import React, { Component } from 'react'

import Flyout from './Flyout'

const Flyouts = ({ handleClick, openFlyouts }) => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Flyouts</h4>
      <div className="o-grid o-grid--gutter-md o-grid--matrix">
        {Object.keys(openFlyouts).map(flyoutKey => (
          <Flyout
            isOpen={openFlyouts[flyoutKey]}
            id={flyoutKey}
            key={flyoutKey}
            handleClick={handleClick}
          />),
        )}
      </div>
    </div>
  </section>
)

export default Flyouts
