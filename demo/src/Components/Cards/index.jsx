import React, { Component } from 'react'
import classNames from 'classnames'

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
              <div className={classNames('c-card', { 'c-card--primary' : this.state.status.primary })}>
                <div className="c-card__img">
                  <div className="c-card__img--placeholder c-card__img--top"></div>
                </div>
                <div className="c-card-block">
                  <h4 className="c-card-block__title">Card title</h4>
                  <p className="c-card-block__text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--success' : this.state.status.success })}>
                <div className="c-card__img">
                  <div className="c-card__img--placeholder c-card__img--top"></div>
                </div>
                <div className="c-card-block">
                  <h4 className="c-card-block__title">Card title</h4>
                  <p className="c-card-block__text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--info' : this.state.status.info })}>
                <div className="c-card__img">
                  <div className="c-card__img--placeholder c-card__img--top"></div>
                </div>
                <div className="c-card-block">
                  <h4 className="c-card-block__title">Card title</h4>
                  <p className="c-card-block__text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--warning' : this.state.status.warning })}>
                <div className="c-card__img">
                  <div className="c-card__img--placeholder c-card__img--top"></div>
                </div>
                <div className="c-card-block">
                  <h4 className="c-card-block__title">Card title</h4>
                  <p className="c-card-block__text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>

            <div className="o-grid__item u-1/5@sm">
              <div className={classNames('c-card', { 'c-card--danger' : this.state.status.danger })}>
                <div className="c-card__img">
                  <div className="c-card__img--placeholder c-card__img--top"></div>
                </div>
                <div className="c-card-block">
                  <h4 className="c-card-block__title">Card title</h4>
                  <p className="c-card-block__text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
