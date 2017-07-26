import React, { Component } from 'react'
import classNames from 'classnames'

import Image from './Image'
import Title from './Title'
import Text from './Text'

class Cards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: {
        primary: true,
        success: true,
        info: true,
        warning: true,
        danger: true,
      },
    }
  }

  render() {
    return (
      <section className="o-section-md">
        <div className="o-site-wrap o-site-wrap--padding">
          <div className="o-grid o-grid--gutter-md o-grid--matrix">

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--primary': this.state.status.primary })}>
                <Image />
                <div className="c-card-block">
                  <Title />
                  <Text />
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--success': this.state.status.success })}>
                <Image />
                <div className="c-card-block">
                  <Title />
                  <Text />
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--info': this.state.status.info })}>
                <Image />
                <div className="c-card-block">
                  <Title />
                  <Text />
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--warning': this.state.status.warning })}>
                <Image />
                <div className="c-card-block">
                  <Title />
                  <Text />
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--danger': this.state.status.danger })}>
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
  }
}

export default Cards
