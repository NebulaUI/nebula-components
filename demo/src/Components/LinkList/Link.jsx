import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const Link = ({ to, children, className }) => (
  <a href={to} className={classNames('c-link-list__link', className)}>
    { children }
  </a>
)

Link.propTypes = {
  to: T.string.isRequired,
  children: T.node.isRequired,
  className: T.string,
}

export default Link
