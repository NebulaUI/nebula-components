import React from 'react'

const StatusCards = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Status Cards</h4>
      <div className="o-grid o-grid--gutter-md o-grid--matrix">
        <div className="o-grid__item u-1/2@sm">
          <div className="c-status-card c-status-card--success">
            <div className="c-status-card__component"><span>Icon</span></div>
            <div className="c-status-card__body">
              <h3>Success</h3>
              <p>Lorem ipsum dolor sit amit</p>
            </div>
          </div>
        </div>
        <div className="o-grid__item u-1/2@sm">
          <div className="c-status-card c-status-card--info">
            <div className="c-status-card__component" />
            <div className="c-status-card__body">
              <h3>Info</h3>
              <p>Lorem ipsum dolor sit amit</p>
            </div>
          </div>
        </div>
        <div className="o-grid__item u-1/2@sm">
          <div className="c-status-card c-status-card--warning">
            <div className="c-status-card__component" />
            <div className="c-status-card__body">
              <h3>Warning</h3>
              <p>Lorem ipsum dolor sit amit</p>
            </div>
          </div>
        </div>
        <div className="o-grid__item u-1/2@sm">
          <div className="c-status-card c-status-card--error">
            <div className="c-status-card__component" />
            <div className="c-status-card__body">
              <h3>Error</h3>
              <p>Lorem ipsum dolor sit amit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default StatusCards
