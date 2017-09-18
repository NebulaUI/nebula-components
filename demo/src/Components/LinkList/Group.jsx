import React from 'react'
import T from 'prop-types'

const Group = ({ divider, children }) => (
  <ul
    className={`c-link-list__group ${divider ? 'c-link-list__group--divider' : ''}`}
  >
    { children }
  </ul>
)

Group.propTypes = {
  divider: T.bool,
  children: T.node,
}

export default Group
