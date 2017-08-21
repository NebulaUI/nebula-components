import React from 'react'

import Dropdown from './Dropdown'
import DropdownToggle from './DropdownToggle'
import DropdownContent from './DropdownContent'

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
          <a
            href=""
            className="c-btn c-btn--beta c-btn--md"
          >Place another bet</a>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Large</strong>
          </div>
          <a
            href=""
            className="c-btn c-btn--alpha c-btn--lg"
          >Place another bet</a>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Full width</strong>
          </div>
          <button
            href=""
            className="c-btn c-btn--alpha c-btn--md c-btn--full"
          >Place another bet</button>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Small</strong>
          </div>
          <a
            href=""
            className="c-btn c-btn--alpha c-btn--sm"
          >Place another bet</a>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Disabled</strong>
          </div>
          <button
            href=""
            className="c-btn c-btn--alpha c-btn--md"
            disabled
          >Place another bet</button>
        </li>
        <li className="o-bare-list__item">
          <div>
            <strong>Segmented Button:</strong>
          </div>
          <div className="o-grid o-grid--gutter-md o-grid--matrix">
            <div className="o-grid__item u-1/2">
              <Dropdown className="c-btn-group__dropdown-toggle--left">
                <DropdownToggle>
                  Place another bet
                </DropdownToggle>
                <DropdownContent>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </DropdownContent>
              </Dropdown>
            </div>
            <div className="o-grid__item u-1/2">
              <Dropdown className="c-btn-group__dropdown-toggle--right">
                <DropdownToggle>
                  Place another bet
                </DropdownToggle>
                <DropdownContent>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </DropdownContent>
              </Dropdown>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
)

export default Btn
