import React from 'react'
import T from 'prop-types'

const TabPanel = ({ children }) => <div>{children}</div>

TabPanel.propTypes = {
  children: T.node,
}

export default TabPanel
