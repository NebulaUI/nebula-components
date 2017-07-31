import React from 'react'
import T from 'prop-types'

const TabPanel = ({ children }) => <div className="c-tab__panel">{children}</div>

TabPanel.propTypes = {
  children: T.node,
}

export default TabPanel
