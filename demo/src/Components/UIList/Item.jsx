import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Item = ({ children, className }) => (
  <li className={classNames('c-ui-list__item', className)}>
    { children }
  </li>
)

Item.propTypes = {
  children: T.node.isRequired,
  className: T.string,
}

export default Item
