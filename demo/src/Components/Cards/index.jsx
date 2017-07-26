import React from 'react'

import Icon from './Icon'
import Image from './Image'
import Text from './Text'
import Title from './Title'

const Cards = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Cards: Base Cards</h4>
      <div className="o-grid o-grid--gutter-md o-grid--matrix">

        <div className="o-grid__item u-1/3">
          <div className="c-card">
            <div className="c-card-block">
              <Title />
              <Text />
            </div>
          </div>
        </div>

        <div className="o-grid__item u-1/3">
          <div className="c-card">
            <div className="c-card-block">
              <Icon />
              <Title />
              <Text />
            </div>
          </div>
        </div>

        <div className="o-grid__item u-1/3">
          <div className="c-card">
            <Image />
            <div className="c-card-block">
              <Title />
              <Text />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Cards
