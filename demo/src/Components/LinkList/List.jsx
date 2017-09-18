import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'

const List = ({ children, className }) => (
  <ul className={classNames('c-link-list c-link-list--spaced-md', className)}>
    { children }
  </ul>
)


List.propTypes = {
  className: T.string,
  children: T.node,
}

export default List
