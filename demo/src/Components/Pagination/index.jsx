import React from 'react'

const Pagination = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <h4>Pagination</h4>
      <nav aria-label="Page navigation">
        <ol className="c-pagination o-inline-list o-inline-list--spaced-md">
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link" href="" disabled>
              Previous
            </a>
          </li>
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link" href="">1</a>
          </li>
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link" href="">2</a>
          </li>
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link" href="">3</a>
          </li>
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link c-pagination__link--more" href="">...</a>
          </li>
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link is-active" href="">12</a>
          </li>
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link" href="">13</a>
          </li>
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link" href="">14</a>
          </li>
          <li className="c-pagination__item o-inline-list__item">
            <a className="c-pagination__link" href="">
              Next
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </section>
)

export default Pagination
