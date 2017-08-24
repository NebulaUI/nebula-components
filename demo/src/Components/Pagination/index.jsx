import React from 'react'

const Pagination = () => (
  <section className="o-section-md">
    <div className="o-site-wrap o-site-wrap--padding">
      <nav aria-label="Page navigation">
        <ul className="o-inline-list o-inline-list--spaced-md">
          <li className="o-inline-list__item">
            <a className="" href="/" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="o-inline-list__item">
            <a className="" href="/">1</a>
          </li>
          <li className="o-inline-list__item">
            <a className="" href="/" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
)

export default Pagination
