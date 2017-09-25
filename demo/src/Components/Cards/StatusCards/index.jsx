import React from 'react'

import Text from '../Text'

const StatusCards = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Status Cards</h4>
      <div className="o-grid o-grid--gutter-md o-grid--matrix">
        <div className="o-grid__item u-1/2@sm">
          <div className="c-status-card">
            <div className="o-flag__component c-status-card__component c-status-card--success" />
            <div className="o-flag__body c-status-card__body">
              <h3>Success</h3>
              <Text />
            </div>
          </div>
        </div>
        <div className="o-grid__item u-1/2@sm">
          <div className="c-status-card">
            <div className="o-flag__component c-status-card__component c-status-card--info" />
            <div className="o-flag__body c-status-card__body">
              <h3>Info</h3>
              <Text />
            </div>
          </div>
        </div>
        <div className="o-grid__item u-1/2@sm">
          <div className="c-status-card">
            <div className="o-flag__component c-status-card__component c-status-card--warning" />
            <div className="o-flag__body c-status-card__body">
              <h3>Warning</h3>
              <Text />
            </div>
          </div>
        </div>
        <div className="o-grid__item u-1/2@sm">
          <div className="c-status-card">
            <div className="o-flag__component c-status-card__component c-status-card--error" />
            <div className="o-flag__body c-status-card__body">
              <h3>Error</h3>
              <Text />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default StatusCards
