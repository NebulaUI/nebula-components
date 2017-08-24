import React from 'react'

const Pagination = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Pagination</h4>
      <nav className="c-pagination" aria-label="Page navigation">
        <ul className="c-pagination-list o-inline-list">
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link" href="" aria-label="Previous" disabled>
              <span>Previous</span>
            </a>
          </li>
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link" href="">1</a>
          </li>
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link" href="">2</a>
          </li>
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link" href="">3</a>
          </li>
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link c-pagination-list__link--more" href="">...</a>
          </li>
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link is-active" href="">12</a>
          </li>
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link" href="">13</a>
          </li>
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link" href="">14</a>
          </li>
          <li className="c-pagination-list__item o-inline-list__item">
            <a className="c-pagination-list__link" href="" aria-label="Next">
              <span>Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
)

export default Pagination
