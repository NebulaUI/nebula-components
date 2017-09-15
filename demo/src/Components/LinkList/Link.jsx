import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Link = ({ to, children, className }) => (
  <a href={to} className={classNames('c-list__link', className)}>LinkList
    { children }
  </a>
)

Link.propTypes = {
  to: T.string.isRequired,
  children: T.node.isRequired,
  className: T.string,
}

export default Link
