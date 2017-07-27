import React, { Component } from 'react'
import classNames from 'classnames'

class Flyouts extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <section className="o-section-md">
        <div className="o-site-wrap o-site-wrap--padding">
          <h4>Flyouts</h4>
          <div className="o-grid o-grid--gutter-md o-grid--matrix">
            <div className="o-grid__item u-1/2@sm">
              <div className={classNames('c-flyout', { 'is-open': this.state.isOpen })}>
                <button className="c-flyout__toggle" onClick={this.handleToggle}>+</button>
                <div className="c-flyout__content c-flyout__content--ne">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur culpa ex explicabo illo inventore laboriosam neque,
                  nihil omnis ratione ullam. Error ex, excepturi incidunt ipsum iure libero
                  maiores quidem voluptates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Flyouts
