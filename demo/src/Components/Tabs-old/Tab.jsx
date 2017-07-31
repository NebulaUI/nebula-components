import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Tab = ({ tabs, isActive, id, handleClick }) => (
  <div className="o-grid__item u-1/4@sm">
    <ul>
      <li className={classNames('c-tab', { 'is-active': isActive })}>
        <a href="#tabOne" className="c-tab__toggle" onClick={() => { handleClick(id) }}>Click me: {id}</a>
      </li>
      <li className={classNames('c-tab', { 'is-active': isActive })}>
        <a href="#tabTwo" className="c-tab__toggle" onClick={() => { handleClick(id) }}>Click me: {id}</a>
      </li>
    </ul>
  </div>
)

Tab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  tabs: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }),
}

export default Tab
