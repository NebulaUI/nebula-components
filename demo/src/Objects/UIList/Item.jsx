import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Item = ({ children, className }) => (
  <li className={classNames('o-ui-list__item o-ui-list__item--divider', className)}>
    { children }
  </li>
)

Item.propTypes = {
  children: T.node.isRequired,
  className: T.string,
}

export default Item
