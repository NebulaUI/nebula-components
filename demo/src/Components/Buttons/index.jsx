import React from 'react'

const Btn = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h2>Buttons</h2>
      <ul className="o-bare-list o-bare-list--spaced-md">
        <li className="o-bare-list__item">
          <div>
            <strong>Alpha</strong>
          </div>
          <button className="c-btn c-btn--alpha c-btn--md">Place bet</button>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Beta</strong>
          </div>
          <a href="" className="c-btn c-btn--beta c-btn--md">Place another bet</a>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Large</strong>
          </div>
          <a href="" className="c-btn c-btn--alpha c-btn--lg">Place another bet</a>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Full width</strong>
          </div>
          <button href="" className="c-btn c-btn--alpha c-btn--md c-btn--full">Place another bet</button>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Small</strong>
          </div>
          <a href="" className="c-btn c-btn--alpha c-btn--sm">Place another bet</a>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Disabled</strong>
          </div>
          <button href="" className="c-btn c-btn--alpha c-btn--md" disabled>Place another bet</button>
        </li>
      </ul>
    </div>
  </section>
)

export default Btn
