import React, { Component } from 'react'
import classNames from 'classnames'

// import Icon from '../Icon'
import Text from '../Text'
import Title from '../Title'

class StatusCards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: {
        success: true,
        info: true,
        warning: true,
        error: true,
      },
    }
  }
  render() {
    return (
      <section className="o-section-md">
        <div className="o-site-wrap o-site-wrap--padding">
          <h4>Cards: Status Cards</h4>
          <div className="o-grid o-grid--gutter-md o-grid--matrix">

            <div className="o-grid__item u-1/2@sm">
              <div className={classNames('c-card c-card--status', { 'ct-card-status--success': this.state.status.success })}>
                <div className="c-card-block">
                  <Title />
                  <Text />
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/2@sm">
              <div className={classNames('c-card c-card--status', { 'c-card-status--info': this.state.status.info })}>
                <div className="c-card-block">
                  <Title />
                  <Text />
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/2@sm">
              <div className={classNames('c-card c-card--status', { 'c-card-status--warning': this.state.status.warning })}>
                <div className="c-card-block">
                  {/*<Icon className={classNames('c-icon', { 'c-icon--warning': this.state.status.warning })} /> TODO*/}
                  <i className="c-icon c-icon--warning" aria-hidden="true" />
                  <Title />
                  <Text />
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/2@sm">
              <div className={classNames('c-card c-card--status', { 'c-card-status--error': this.state.status.error })}>
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
  }
}

export default StatusCards
