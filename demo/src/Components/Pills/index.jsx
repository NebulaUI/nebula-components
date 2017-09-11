import React from 'react'

const Pills = () => (
  <div>
    <section className="o-section-md">
      <div className="o-site-wrap o-site-wrap--padding">
        <h4>Pills: Large</h4>
        <ul className="o-matrix-list o-matrix-list--spaced-md">
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs c-pill--border">Base</button>
          </li>
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs c-pill--alpha">Alpha</button>
          </li>
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs c-pill--beta">Beta</button>
          </li>
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs is-active">Active</button>
          </li>
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs" disabled>Disabled</button>
          </li>
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs c-pill--success">Success</button>
          </li>
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs c-pill--info">Info</button>
          </li>
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs c-pill--warning">Warning</button>
          </li>
          <li className="o-matrix-list__item">
            <button className="c-pill c-pill--xs c-pill--error">Error</button>
          </li>
        </ul>
      </div>
    </section>
  </div>
)

export default Pills
